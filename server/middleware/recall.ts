import { NextFunction, Request, Response } from 'express'
import WinkFn from 'wink-nlp'
import model from 'wink-eng-lite-web-model'
import PatternModel from '../resources/pattern/model'
import RelatedModel from '../resources/related/model'
import { observationCollection } from '../resources/observation/model'
import { assumptionCollection } from '../resources/assumption/model'
import { projectCollection } from '../resources/project/model'

type RequestToDetect = Request<
  unknown,
  unknown,
  { title?: string; content?: string; transcriptObject?: TranscriptObject }
>

const languageProcessor = WinkFn(model)

const setRelated = async (
  patterns: PatternResource,
  text: string
): Promise<Related> => {
  const related: Related = {
    parentId: undefined,
    parentType: 'observation',
    observations: [],
    evidence: [],
    assumptions: [],
    projects: [],
    detected: [],
  }

  languageProcessor.learnCustomEntities(patterns.patterns)
  const doc = languageProcessor.readDoc(text)
  const detectedEntities = doc.customEntities().out()
  related.detected = [...new Set(detectedEntities)]

  const regex = detectedEntities.map((e) => new RegExp(e, 'i'))

  const relatedOthers = await RelatedModel.find({ detected: { $in: regex } })

  relatedOthers.forEach((r) => {
    if (!r.parentId) throw Error('No parentId!')

    switch (r.parentType) {
      case observationCollection:
        related.observations.push(r.parentId)
        break
      case assumptionCollection:
        related.assumptions.push(r.parentId)
        break
      case projectCollection:
        related.projects.push(r.parentId)
        break
      default:
        break
    }
  })

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
