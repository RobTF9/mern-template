import crudControllers from '../../utils/crud'
import Pattern, { patternCollection } from './model'

const controllers = {
  ...crudControllers<PatternResource>(Pattern, patternCollection),
}

export default controllers
