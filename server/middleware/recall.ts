import { NextFunction, Request, Response } from 'express'
import WinkFn from 'wink-nlp'
import model from 'wink-eng-lite-web-model'
import Observation from '../resources/observation/model'
import Assumption from '../resources/assumption/model'
import Project from '../resources/project/model'
import { Model } from 'mongoose'
import PatternModel from '../resources/pattern/model'

type RequestToDetect = Request<
  unknown,
  unknown,
  { title?: string; content?: string; transcriptObject?: TranscriptObject }
>

// eslint-disable-next-line
const models: ['observations' | 'assumptions' | 'projects', Model<any>][] = [
  ['observations', Observation],
  ['assumptions', Assumption],
  ['projects', Project],
]

const languageProcessor = WinkFn(model)

const setRelated = async (
  patterns: PatternResource,
  text: string
): Promise<Related> => {
  const related: Related = {
    parentId: '',
    parentType: 'observation',
    observations: [],
    assumptions: [],
    projects: [],
    detected: [],
    // TODO get related evidence after you query related object
  }

  languageProcessor.learnCustomEntities(patterns.patterns)
  const doc = languageProcessor.readDoc(text)
  const detectedEntities = doc.customEntities().out()
  related.detected = [...detectedEntities]

  const regex = detectedEntities.map((e) => new RegExp(e, 'i'))

  for (const [c, m] of models) {
    const relatedModels = await m.find({
      content: { $in: regex },
    })
    related[c] = [...relatedModels]
  }

  return related
}

const patternMap: Map<string, PatternResource> = new Map()
async function getPatterns(req: RequestToDetect): Promise<PatternResource> {
  const { user } = req.session
  if (!user) throw Error('No user!')

  const existing = patternMap.get(user)
  if (existing) {
    return existing
  }

  const pattern = await PatternModel.findOne({ createdBy: user })
  if (!pattern) throw Error('No pattern!')
  patternMap.set(user, pattern)
  return pattern
}

export async function detection(
  req: RequestToDetect,
  _: Response,
  next: NextFunction
) {
  try {
    const patterns = await getPatterns(req)

    if (req.body.content) {
      req.related = await setRelated(patterns, req.body.content)
      return next()
    }

    if (req.body.transcriptObject) {
      const { transcriptObject: t } = req.body
      const combined = t.map(({ transcript }) => transcript).join(' ')
      req.related = await setRelated(patterns, combined)
      return next()
    }

    return next()
  } catch (error) {
    return next(error)
  }
}
