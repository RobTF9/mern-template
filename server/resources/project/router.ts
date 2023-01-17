import { Router } from 'express'
import controllers from './controller'

const projectRouter = Router()

projectRouter.route('/').post(controllers.create).get(controllers.readAll)
projectRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default projectRouter
