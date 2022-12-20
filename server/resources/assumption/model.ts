import { Schema, model, SchemaTypes } from 'mongoose'

export const assumptionCollection = 'assumption'

const assumptionSchema = new Schema<AssumptionResource>(
  {
    content: { type: String, required: true },
    opposing: [
      {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'observation',
      },
    ],
    supporting: [
      {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'observation',
      },
    ],
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
  { timestamps: true, collection: assumptionCollection }
)

const Assumption = model<AssumptionResource>(
  assumptionCollection,
  assumptionSchema
)

export default Assumption
