import { Router } from 'express'
import { getUser } from './controllers'

const userRouter = Router()

userRouter.route('/').get(getUser)

export default userRouter
