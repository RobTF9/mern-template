import { SessionData } from 'express-session'
import { ObjectId } from 'mongoose'

export {}

declare module 'http' {
  interface IncomingMessage {
    session: SessionData & {
      authenticated: boolean
    }
  }
}

declare global {
  type Email = { email: string }
  type Password = { password: string }
  type Username = { username: string }

  /** Base mongoose resource, always contain timestamps and _id */
  interface Resource {
    _id: string
    createdAt: string
    // createdBy: string
    // updatedAt: string
  }

  interface RoomUser {
    socket: string
    username: string
  }

  /** A message object sent from the server */
  type Message = {
    /** Error or success, used to determine color on front end */
    type: string
    /** Boolean to check if message should show or not */
    visible: boolean
    /** The message text content */
    message: string
  }

  /** The generic Server response
   * @D typically a resource, or array of resources, from the database
   */
  interface ServerReponse<D = void> {
    /** A boolean that determines if client is authorised */
    auth?: boolean
    message?: Message
    /** Data returned from the response */
    data?: D
    searched?: boolean
  }

  interface ListInterface {
    name: string
    items: { item: string; _id: string }[]
    editors: ObjectId[]
    createdBy: ObjectId
  }

  type ListResource = ListInterface & Resource

  /** The user interface, without mongodb fields (timestamps & _id) */
  interface UserInterface {
    username: string
    email: string
    password: string
  }

  interface PublicUserInterface {
    username: string
    email: string
  }

  /** User resource from the database */
  type UserResource = PublicUserInterface & Resource
}
