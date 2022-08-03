import { Schema, model } from 'mongoose'

const collection = 'Item'

const itemSchema = new Schema<ItemInterface>(
  { item: { type: String, required: true } },
  { timestamps: true, collection }
)

const Item = model<ItemInterface>(collection, itemSchema)

export default Item
