import { Router } from 'express'
import { multerMiddleware, uploadVideo } from '../../services/video'
import controllers from './controller'

const router = Router()

router
  .route('/')
  .post(multerMiddleware, uploadVideo, controllers.create)
  .get(controllers.readAll)
router.route('/transcript').get(controllers.getTranscript)
router
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default router
