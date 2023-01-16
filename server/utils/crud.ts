import { RequestHandler } from 'express'
import { Model } from 'mongoose'
import RelatedModel from '../resources/related/model'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './messages'

function crudControllers<T extends Resource>(
  model: Model<T>,
  collection: string
) {
  const create: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.create({
        ...req.body,
        createdBy: req.session.user,
        updatedBy: req.session.user,
      })

      const related = await RelatedModel.create({
        ...req.related,
        parentId: `${item._id}`,
        parentType: collection,
        createdBy: req.session.user,
        updatedBy: req.session.user,
      })

      await RelatedModel.updateMany(
        { detected: { $in: related.detected }, _id: { $ne: related._id } },
        { [`${collection}s`]: related._id },
        { new: true }
      )
        .lean()
        .exec()

      return res.status(200).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_CREATED(collection),
        related,
      })
    } catch (error) {
      return next(error)
    }
  }

  const readAll: RequestHandler = async (req, res, next) => {
    try {
      const items = await model.find({
        createdBy: req.session.user,
        ...req.query,
      })
      return res.status(200).json({ data: items })
    } catch (error) {
      return next(error)
    }
  }

  const readOne: RequestHandler = async (req, res, next) => {
    try {
      const item = await model
        .findOne({ _id: req.params.id, createdBy: req.session.user })
        .lean()
        .exec()

      if (!item) {
        return res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })
      }

      const related = await RelatedModel.findOne({ parentId: `${item._id}` })

      return res.status(200).json({ data: item, related })
    } catch (error) {
      return next(error)
    }
  }

  const update: RequestHandler = async (req, res, next) => {
    try {
      const item = await model
        .findOneAndUpdate(
          { _id: req.params.id, createdBy: req.session.user, ...req.query },
          {
            ...req.body,
            updatedBy: req.session.user,
          },
          { new: true }
        )
        .lean()
        .exec()

      if (!item) {
        return res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })
      }

      const related = await RelatedModel.findOneAndUpdate(
        { parentId: `${item._id}` },
        {
          ...req.related,
          updatedBy: req.session.user,
        }
      )

      if (!related) {
        return res
          .status(400)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND('related') })
      }

      await RelatedModel.updateMany(
        { detected: { $in: related.detected }, _id: { $ne: related._id } },
        { [collection]: related._id }
      )

      return res.status(201).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_UPDATED(collection),
        related,
      })
    } catch (error) {
      return next(error)
    }
  }

  const deleteOne: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec()

      if (!item) {
        return res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })
      }

      const related = await RelatedModel.findOneAndDelete({
        parentId: `${item._id}`,
      })
        .lean()
        .exec()

      return res.status(200).json({
        data: item,
        related,
        message: SUCCESS_MESSAGE.RESOURCE_DELETED(collection),
      })
    } catch (error) {
      return next(error)
    }
  }

  return {
    create,
    readAll,
    readOne,
    update,
    deleteOne,
  }
}

export default crudControllers
