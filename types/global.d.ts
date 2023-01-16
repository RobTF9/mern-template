import { ObjectId } from 'mongoose'

export {}

declare global {
  type Email = { email: string }
  type Password = { password: string }
  type Username = { username: string }

  /** Base mongoose resource, always contain timestamps and _id */
  interface Resource {
    _id: ObjectId
    createdAt: Date
    createdBy: ObjectId
    updatedAt: Date
    updatedBy: ObjectId
  }

  /** A message object sent from the server */
  type Message = {
    type: string
    visible: boolean
    message: string
  }

  /** The generic Server response
   * @D typically a resource, or array of resources, from the database
   */
  interface ServerResponse<D = void> {
    auth?: boolean
    message?: Message
    data?: D
    related?: RelatedResource
  }

  interface ProjectInterface {
    title: string
    content: string
  }

  type ProjectResource = ProjectInterface & Resource

  type TranscriptObject = [
    {
      confidence: number
      transcript: string
      words: [
        {
          word: string
          start_time: number
          end_time: number
        }
      ]
    }
  ]

  interface EvidenceInterface {
    video: string
    source: { segment: ObjectId; participant: string }
    transcript: string
    public_id: string
    project: ObjectId
    transcriptObject?: TranscriptObject
  }

  type EvidenceResource = EvidenceInterface & Resource

  interface ObservationInterface {
    content: string
    evidence: ObjectId
  }

  type ObservationResource = ObservationInterface & Resource

  interface AssumptionInterface {
    content: string
    supporting: ObjectId[]
    opposing: ObjectId[]
  }

  type AssumptionResource = AssumptionInterface & Resource

  interface SegmentInterface {
    title: string
    participants: string[]
  }

  type SegmentResource = SegmentInterface & Resource

  interface PatternInterface {
    patterns: { name: string; patterns: string[] }[]
  }

  type PatternResource = PatternInterface & Resource

  interface UserInterface {
    _id: ObjectId
    username: string
    email: string
    password: string
    checkPassword: (password: string) => boolean
    getPublicFields: () => {
      username: string
      email: string
      _id: string
    }
  }

  interface PublicUserInterface {
    username: string
    email: string
  }

  type Related = {
    parentId?: ObjectId
    parentType:
      | 'observation'
      | 'assumption'
      | 'project'
      | 'evidence'
      | 'segment'
    detected: string[]
    observations: ObjectId[]
    assumptions: ObjectId[]
    projects: ObjectId[]
    evidence: ObjectId[]
  }

  type RelatedResource = Related & Resource

  namespace Express {
    interface Request {
      related?: Related
      patternId?: ObjectId
    }
  }
}
