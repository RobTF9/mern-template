import { Schema, model, SchemaTypes } from 'mongoose'

export const relatedCollection = 'related'

const relatedSchema = new Schema<RelatedResource>(
  {
    parentId: {
      type: String,
      required: true,
    },
    observations: [
      {
        _id: SchemaTypes.ObjectId,
        content: String,
        evidence: SchemaTypes.ObjectId,
      },
    ],
    assumptions: [
      {
        _id: SchemaTypes.ObjectId,
        content: String,
        supporting: [SchemaTypes.ObjectId],
        opposing: [SchemaTypes.ObjectId],
      },
    ],
    projects: [
      {
        _id: SchemaTypes.ObjectId,
        content: String,
        title: String,
      },
    ],
    detected: [String],
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
  { timestamps: true, collection: relatedCollection }
)

const RelatedModel = model<RelatedResource>(relatedCollection, relatedSchema)

export default RelatedModel
