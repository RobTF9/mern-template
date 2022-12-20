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
    searched?: boolean
  }

  interface ProjectInterface {
    title: string
    content: string
  }

  type ProjectResource = ProjectInterface & Resource

  interface EvidenceInterface {
    video: string
    participant: string
    transcript: string
    public_id: string
    transcriptObject?: [
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
  }

  type EvidenceResource = EvidenceInterface & Resource

  /** The user interface, without mongodb fields (timestamps & _id) */
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
}
