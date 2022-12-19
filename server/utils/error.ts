import { ErrorRequestHandler } from 'express'
import { ERROR_MESSAGE } from './messages'

const errorHandler: ErrorRequestHandler = (err, _, res) => {
  if (err) {
    return res.status(500).json({ message: ERROR_MESSAGE.INTERNAL_SERVER })
  }
  return res.end()
}

export default errorHandler
