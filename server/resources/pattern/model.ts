import { Schema, model, SchemaTypes } from 'mongoose'

export const patternCollection = 'pattern'

const patternSchema = new Schema<PatternResource>(
  {
    patterns: {
      type: [
        {
          name: { type: String, required: true },
          patterns: [{ type: String, required: true }],
        },
      ],
      required: true,
    },
    createdBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
      unique: true,
    },
    updatedBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true, collection: patternCollection }
)

const PatternModel = model<PatternResource>(patternCollection, patternSchema)

export default PatternModel
