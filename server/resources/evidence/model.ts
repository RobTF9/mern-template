import { Schema, model, SchemaTypes } from 'mongoose'

export const evidenceCollection = 'evidence'

const evidenceSchema = new Schema<EvidenceResource>(
  {
    video: { type: String, required: true },
    transcript: { type: String, required: true },
    public_id: { type: String, required: true },
    participant: { type: String, required: true },
    transcriptObject: [
      {
        confidence: Number,
        transcript: String,
        words: [{ word: String, start_time: Number, end_time: Number }],
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
  { timestamps: true, collection: evidenceCollection }
)

const Evidence = model<EvidenceResource>(evidenceCollection, evidenceSchema)

export default Evidence
