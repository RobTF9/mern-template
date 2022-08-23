import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import connect from './db/connect'
import errorHandler from './utils/error'
import authSession from './auth/session'
import { protect } from './auth/middleware'
import authRouter from './auth/router'
import listRouter from './resources/list/router'

export const app = express()
const httpServer = createServer(app)
const port = process.env.PORT || 3000

app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.set('trust proxy', 1)

// Session
app.use(authSession)

// RESTful endpoints
app.use('/auth', authRouter)
app.use('/api', protect)
app.use('/api/list', listRouter)

// Websocket
const io = new Server(httpServer)

io.on('connect', (socket) => {
  console.log('A user is connected')

  socket.on('create', (data: string) => {
    console.log('server create', data)
    io.emit('create', data)
  })

  socket.on('read', (data: string) => {
    console.log('server read', data)
    io.emit('read', data)
  })

  socket.on('update', (data: string) => {
    console.log('server update', data)
    io.emit('update', data)
  })

  socket.on('delete', (data: string) => {
    console.log('server delete', data)
    io.emit('delete', data)
  })

  socket.on('disconnect', () => {
    console.log('A user has disconnected')
  })
})

// Client
const clientPath = path.join(__dirname, '..', 'client')
app.use(express.static(clientPath))
app.use('*', express.static(clientPath))

app.use(errorHandler)

async function startServer(): Promise<void> {
  try {
    connect()
    httpServer.listen(port, () => console.log(`Server running on ${port}`))
  } catch (error) {
    console.error(error)
  }
}

export default startServer
