import express, { Request, Response, NextFunction } from 'express'
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
import connectWebSocket from './socket/connector'
import userRouter from './resources/user/router'

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
app.use('/api/user', userRouter)

// Websocket
const io = new Server(httpServer)

io.use((socket, next) =>
  authSession(socket.request as Request, {} as Response, next as NextFunction)
)

connectWebSocket(io)

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
