import { Schema, model, SchemaTypes } from 'mongoose'

export const projectCollection = 'project'

const projectSchema = new Schema<ProjectResource>(
  {
    content: { type: String, required: true },
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
  { timestamps: true, collection: projectCollection }
)

const Project = model<ProjectResource>(projectCollection, projectSchema)

export default Project
