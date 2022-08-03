import { ObjectId } from 'mongoose'

export {}

declare global {
  /** Base mongoose resource, always contain timestamps and _id */
  interface Resource {
    _id: string
    createdAt: string
    // createdBy: string
    // updatedAt: string
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

  /** The item interface, without mongodb fields (timestamps & _id) */
  interface ItemInterface {
    item: string
  }

  /** Item resource from the database */
  type ItemResoure = ItemInterface & Resource
}
