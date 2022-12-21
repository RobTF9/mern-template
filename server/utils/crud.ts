import { RequestHandler } from 'express'
import { Model } from 'mongoose'
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
      return res.status(200).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_CREATED(collection),
        related: req.related ? req.related : undefined,
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

      if (!item)
        res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })

      return res.status(200).json({ data: item })
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

      return res.status(201).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_UPDATED(collection),
        related: req.related ? req.related : undefined,
      })
    } catch (error) {
      return next(error)
    }
  }

  const deleteOne: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec()
      return res.status(200).json({
        data: item,
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
