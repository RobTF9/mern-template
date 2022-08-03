import { Router } from 'express'
import { create, deleteOne, readAll, readOne, update } from './controller'

const router = Router()

router.route('/').post(create).get(readAll)
router.route('/:id').put(update).get(readOne).delete(deleteOne)

export default router
