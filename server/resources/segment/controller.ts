import crudControllers from '../../utils/crud'
import Segment, { segmentCollection } from './model'

const controllers = {
  ...crudControllers<SegmentResource>(Segment, segmentCollection),
}

export default controllers
