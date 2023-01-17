import { Router } from 'express'
import controllers from './controller'

const patternRouter = Router()

patternRouter.route('/').post(controllers.create).get(controllers.readAll)
patternRouter
  .route('/:id')
  .put(controllers.update)
  .get(controllers.readOne)
  .delete(controllers.deleteOne)

export default patternRouter
