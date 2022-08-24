import { Schema, model, SchemaTypes } from 'mongoose'

const collection = 'list'

const listSchema = new Schema<ListInterface>(
  {
    name: { type: String, required: true },
    items: [
      {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'user',
      },
    ],
    editors: [{ type: SchemaTypes.ObjectId, required: true, ref: 'user' }],
    createdBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true, collection }
)

const List = model<ListInterface>(collection, listSchema)

export default List
