import crudControllers from '../../utils/crud'
import Item from './model'

const controllers = {
  ...crudControllers<ItemResource>(Item, 'item'),
}

export default controllers
