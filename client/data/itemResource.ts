import { APIGiver, APIReciever, createOne, getMany, updateOne } from './crud'

export const getItems: APIReciever<ItemResource[]> = () =>
  getMany<ItemResource>(['/api/item'], '/api/item')

export const createItem: APIGiver<Partial<ItemInterface>, ItemResource> = () =>
  createOne<Partial<ItemInterface>, ItemResource>(['/api/item'], '/api/item')

export const updateItem: APIGiver<Partial<ItemInterface>, ItemResource> = (id) =>
  updateOne<Partial<ItemInterface>, ItemResource>(['/api/item'], `/api/item/${id}`)
