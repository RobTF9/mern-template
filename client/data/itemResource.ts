import { APIGiver, APIReciever, createOne, getMany } from './crud'

export const getItems: APIReciever<{ item: string }[]> = () =>
  getMany<{ item: string }>(['items'], '/api/item')

export const createItem: APIGiver<{ item: string }, ServerReponse<{ item: string }>> = () =>
  createOne<{ item: string }, { item: string }>(['items'], '/api/item')
