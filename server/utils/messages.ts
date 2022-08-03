const errorMessage = (message: string) => ({
  type: 'error',
  message,
  visible: true,
})

const succesMessage = (message: string) => ({
  type: 'success',
  message,
  visible: true,
})

export const SUCCESS_MESSAGE = {
  ITEM_CREATED: succesMessage('Item created'),
}

export const ERROR_MESSAGE = {
  INTERNAL_SERVER: errorMessage('Internal server error'),
}
