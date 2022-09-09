import { ObjectId } from 'mongodb'
import { EVENTS } from '../../constants'
import List from './model'

async function listHandler(
  eventName: string,
  e: EventFromClient<{ _id?: string; item?: string } | undefined>
) {
  let list
  const _id = e.data?._id
  const item = e.data?.item

  switch (eventName) {
    case EVENTS.LIST_CREATE_ITEM:
      if (item) {
        list = await List.findByIdAndUpdate(
          e.room,
          { $push: { items: { $each: [{ item, _id: `${new ObjectId()}` }] } } },
          { new: true }
        )
      }
      break

    case EVENTS.LIST_JOIN_REQUEST:
      list = await List.findById(e.room)
      break

    case EVENTS.LIST_UPDATE_ITEM:
      list = await List.findById(e.room)
      if (list && _id && item) {
        list.items = list.items.map((i) => (`${i._id}` === _id ? { ...i, item } : i))
        list.save()
      }
      break

    default:
      break
  }

  return list
}

export default listHandler
