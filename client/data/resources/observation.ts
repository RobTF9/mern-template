import { getMany } from '../crud'

export function getObservations(query?: string) {
  return getMany<ObservationResource>(
    [query ? `/api/observation?${query}` : '/api/observation'],
    '/api/observation',
    query && `?${query}`
  )
}
