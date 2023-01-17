import { getMany } from '../crud'

export function getEvidences(query?: string) {
  return getMany<EvidenceResource>(
    [query ? `/api/evidence?${query}` : '/api/evidence'],
    '/api/evidence',
    query && `?${query}`
  )
}
