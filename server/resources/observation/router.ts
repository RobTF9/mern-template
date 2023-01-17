import { Router } from 'express'
import controllers from './controller'

const observationRouter = Router()

observationRouter.route('/').post(controllers.create).get(controllers.readAll)
observationRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default observationRouter
