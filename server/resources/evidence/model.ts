import { Schema, model, SchemaTypes } from 'mongoose'

export const evidenceCollection = 'evidence'

const evidenceSchema = new Schema<EvidenceResource>(
  {
    video: { type: String, required: true },
    transcript: { type: String, required: true },
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
  { timestamps: true, collection: evidenceCollection }
)

const Evidence = model<EvidenceResource>(evidenceCollection, evidenceSchema)

export default Evidence
