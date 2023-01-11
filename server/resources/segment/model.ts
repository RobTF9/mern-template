import { Schema, model, SchemaTypes } from 'mongoose'

export const segmentCollection = 'segment'

const segmentSchema = new Schema<SegmentResource>(
  {
    title: { type: String, required: true },
    participants: [{ type: String, required: true }],
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
  { timestamps: true, collection: segmentCollection }
)

const Segment = model<SegmentResource>(segmentCollection, segmentSchema)

export default Segment
