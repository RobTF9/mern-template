import crudControllers from '../../utils/crud'
import List from './model'

export default crudControllers<ListInterface>(List, 'list')
