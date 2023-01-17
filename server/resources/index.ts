import { Router } from 'express'
import assumptionRouter from './assumption/router'
import evidenceRouter from './evidence/router'
import observationRouter from './observation/router'
import patternRouter from './pattern/router'
import projectRouter from './project/router'
import segmentRouter from './segment/router'
import userRouter from './user/router'

const resourceRouter = Router()

resourceRouter
  .use('/assumption', assumptionRouter)
  .use('/evidence', evidenceRouter)
  .use('/observation', observationRouter)
  .use('/pattern', patternRouter)
  .use('/project', projectRouter)
  .use('/segment', segmentRouter)
  .use('/user', userRouter)

export default resourceRouter
