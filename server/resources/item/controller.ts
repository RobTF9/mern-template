import { RequestHandler } from 'express'
import { SUCCESS_MESSAGE } from '../../utils/messages'
import Item from './model'

export const create: RequestHandler = async (req, res, next) => {
  try {
    const item = await Item.create({
      ...req.body,
      createdBy: req.session.user,
    })
    return res.status(200).json({ data: item, message: SUCCESS_MESSAGE.RESOURCE_CREATED('Item') })
  } catch (error) {
    return next(error)
  }
}

export const readAll: RequestHandler = async (_, res, next) => {
  try {
    const items = await Item.find()
    return res.status(200).json({ data: items })
  } catch (error) {
    return next(error)
  }
}

export const readOne: RequestHandler = async (req, res, next) => {
  try {
    const items = await Item.findById(req.params.id).lean().exec()
    return res.status(200).json({ data: items })
  } catch (error) {
    return next(error)
  }
}

export const update: RequestHandler = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    )
    return res.status(201).json({ data: item, message: SUCCESS_MESSAGE.RESOURCE_UPDATED('Item') })
  } catch (error) {
    return next(error)
  }
}

export const deleteOne: RequestHandler = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).json({ data: item, message: SUCCESS_MESSAGE.RESOURCE_DELETED('Item') })
  } catch (error) {
    return next(error)
  }
}
