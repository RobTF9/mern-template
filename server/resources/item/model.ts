import { Schema, model, SchemaTypes } from 'mongoose'

const collection = 'item'

const itemSchema = new Schema<ItemResource>(
  {
    item: { type: String, required: true },
    createdBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
    updatedBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true, collection }
)

const Item = model<ItemResource>(collection, itemSchema)

export default Item
