import { Schema, model, SchemaTypes } from 'mongoose'

export const observationCollection = 'observation'

const observationSchema = new Schema<ObservationResource>(
  {
    content: { type: String, required: true },
    evidence: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'evidence',
    },
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
  { timestamps: true, collection: observationCollection }
)

const Observation = model<ObservationResource>(
  observationCollection,
  observationSchema
)

export default Observation
