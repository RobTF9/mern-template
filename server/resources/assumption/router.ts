import { Router } from 'express'
import controllers from './controller'

const assumptionRouter = Router()

assumptionRouter.route('/').post(controllers.create).get(controllers.readAll)
assumptionRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default assumptionRouter
