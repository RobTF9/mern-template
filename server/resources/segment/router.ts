import { Router } from 'express'
import controllers from './controller'

const segmentRouter = Router()

segmentRouter.route('/').post(controllers.create).get(controllers.readAll)
segmentRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default segmentRouter
