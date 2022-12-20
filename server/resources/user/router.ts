import { Router } from 'express'
import { getUser } from './controllers'

const router = Router()

router.route('/').get(getUser)

export default router
