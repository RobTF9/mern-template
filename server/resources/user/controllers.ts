import { RequestHandler } from 'express'
import User from './model'

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.user).select('_id username').lean().exec()
    return res.status(200).send({ data: user })
  } catch (error) {
    return next(error)
  }
}
