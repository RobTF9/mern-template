import { getMany } from './crud'

export function getProjects(query?: string) {
  return getMany<ProjectResource>(
    ['/api/project'],
    '/api/project',
    query && `?${query}`
  )
}
