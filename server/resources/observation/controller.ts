import crudControllers from '../../utils/crud'
import Observation, { observationCollection } from './model'

const controllers = {
  ...crudControllers<ObservationResource>(Observation, observationCollection),
}

export default controllers
