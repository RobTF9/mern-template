import crudControllers from '../../utils/crud'
import Assumption, { assumptionCollection } from './model'

const controllers = {
  ...crudControllers<AssumptionResource>(Assumption, assumptionCollection),
}

export default controllers
