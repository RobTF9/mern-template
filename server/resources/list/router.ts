import { Router } from 'express'
import controllers from './controller'

const { create, readAll, update, readOne, deleteOne } = controllers

const router = Router()

router.route('/').post(create).get(readAll)
router.route('/:id').put(update).get(readOne).delete(deleteOne)

export default router
