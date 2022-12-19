import crudControllers from '../../utils/crud'
import Project, { projectCollection } from './model'

const controllers = {
  ...crudControllers<ProjectResource>(Project, projectCollection),
}

export default controllers
