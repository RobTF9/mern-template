import { Router } from 'express'
import { create, readAll } from './controller'

const router = Router()

router.route('/').post(create).get(readAll)

export default router
