import { Schema, model, SchemaTypes } from 'mongoose'

export const relatedCollection = 'related'

const relatedSchema = new Schema<RelatedResource>(
  {
    parentId: {
      type: String,
      required: true,
    },
    parentType: {
      type: String,
      enum: [
        'observation',
        'assumption',
        'project',
        'evidence',
        'segment',
        'pattern',
      ],
      required: true,
    },
    observations: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'observation',
      },
    ],
    assumptions: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'assumption',
      },
    ],
    projects: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'project',
      },
    ],
    evidence: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'evidence',
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
