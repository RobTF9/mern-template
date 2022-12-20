import { RequestHandler } from 'express'
import { ERROR_MESSAGE } from '../../utils/messages'
import User from './model'

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.user).lean().exec()

    if (!user) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND('user') })
    }

    return res.status(200).json({ data: user })
  } catch (error) {
    return next(error)
  }
}
