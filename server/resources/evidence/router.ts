import { Router } from 'express'
import { multerMiddleware, uploadVideo } from '../../middleware/video'
import controllers from './controller'

const evidenceRouter = Router()

evidenceRouter
  .route('/')
  .post(multerMiddleware, uploadVideo, controllers.create)
  .get(controllers.readAll)
evidenceRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default evidenceRouter
