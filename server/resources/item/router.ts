import { Router } from 'express'
import { Server } from 'socket.io'
import crudControllers from '../../utils/crud'
import Item from './model'

function router(io: Server) {
  const r = Router()

  const { create, readAll, update, readOne, deleteOne } = crudControllers<ItemInterface>(
    Item,
    'item',
    io
  )

  r.route('/').post(create).get(readAll)
  r.route('/:id').put(update).get(readOne).delete(deleteOne)
  return r
}

export default router
