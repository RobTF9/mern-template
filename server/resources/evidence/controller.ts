import crudControllers from '../../utils/crud'
import Evidence, { evidenceCollection } from './model'
import { getTranscript } from '../../services/video'

const controllers = {
  ...crudControllers<EvidenceResource>(Evidence, evidenceCollection),
  getTranscript,
}

export default controllers
