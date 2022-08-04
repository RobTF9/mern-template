import { APIGiver, APIReciever, createOne, deleteOne, getMany, updateOne } from './crud'

export const getItems: APIReciever<ItemResource[]> = () =>
  getMany<ItemResource>(['/api/item'], '/api/item')

export const createItem: APIGiver<Partial<ItemInterface>, ItemResource> = () =>
  createOne<Partial<ItemInterface>, ItemResource>(['/api/item'], '/api/item')

export const updateItem: APIGiver<ItemResource, ItemResource> = () =>
  updateOne<ItemResource, ItemResource>(['/api/item'], `/api/item`)

export const deleteItem: APIGiver<string, ItemResource> = () =>
  deleteOne<ItemResource>(['/api/item'], `/api/item`)
