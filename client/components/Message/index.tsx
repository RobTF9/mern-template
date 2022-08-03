import React from 'react'
import { MessageWrapper } from './styles'

interface Props {
  message: Message
  hide: () => void
}

const Message: React.FC<Props> = ({ message, hide }) => {
  return message.visible ? (
    <MessageWrapper>
      <p>{message.message}</p>
      <button type="button" onClick={hide}>
        Hide
      </button>
    </MessageWrapper>
  ) : (
    <></>
  )
}

export default Message
