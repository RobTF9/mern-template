import crudControllers from '../../utils/crud'
import Evidence, { evidenceCollection } from './model'

const controllers = {
  ...crudControllers<EvidenceResource>(Evidence, evidenceCollection),
}

export default controllers
