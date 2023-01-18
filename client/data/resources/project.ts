import { getMany, getOne, createOne } from '../crud'

export function getProjects(query?: string) {
  return getMany<ProjectResource>(
    ['/api/project'],
    '/api/project',
    query && `?${query}`
  )
}

export function getProject(id: string) {
  return getOne<ProjectResource>([`/api/project/${id}`], `/api/project/${id}`)
}

export function createProject() {
  return createOne<ProjectInterface, ProjectResource>(
    [`/api/project`],
    `/api/project`
  )
}
