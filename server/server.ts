import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import projectRouter from './resources/project/router'
import evidenceRouter from './resources/evidence/router'
import path from 'path'
import connect from './db/connect'
import errorHandler from './utils/error'
import authSession from './auth/session'
import { protect } from './auth/middleware'
import authRouter from './auth/router'
import kill from 'kill-port'

export const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.set('trust proxy', 1)
app.use(authSession)
app.use('/auth', authRouter)
app.use('/api', protect)
app.use('/api/project', projectRouter)
app.use('/api/evidence', evidenceRouter)

app.use('/hook', (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

const clientPath = path.join(__dirname, '..', 'client')
app.use(express.static(clientPath))
app.use('*', express.static(clientPath))

app.use(errorHandler)

async function startServer(): Promise<void> {
  try {
    connect()
    app.listen(port, () => console.log(`Server running on ${port}`))

    const toKill = typeof port === 'string' ? parseInt(port) : port

    process.on('uncaughtException', () => kill(toKill, 'tcp'))
  } catch (error) {
    console.error(error)
  }
}

export default startServer
