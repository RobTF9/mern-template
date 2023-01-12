import { NextFunction, Request, Response } from 'express'
import WinkFn from 'wink-nlp'
import model from 'wink-eng-lite-web-model'
import Observation from '../resources/observation/model'
import Assumption from '../resources/assumption/model'
import Project from '../resources/project/model'
import { Model } from 'mongoose'

// TODO PATTERNS SHOULD BE STORED IN A DB
const patterns = [
  { name: 'adjectiveNounPair', patterns: ['ADJ NOUN'] },
  { name: 'nounPair', patterns: ['NOUN NOUN'] },
  { name: 'nounTriple', patterns: ['NOUN NOUN NOUN'] },
  {
    name: 'nounPhrase',
    patterns: ['[|ADJ] [NOUN|PROPN]'],
  },
  { name: 'keywords', patterns: ['in-depth investigations'] },
]

// eslint-disable-next-line
const models: ['observations' | 'assumptions' | 'projects', Model<any>][] = [
  ['observations', Observation],
  ['assumptions', Assumption],
  ['projects', Project],
]

const languageProcessor = WinkFn(model)
languageProcessor.learnCustomEntities(patterns)

const setRelated = async (text: string): Promise<Related> => {
  const related: Related = {
    parentId: '',
    parentType: 'observation',
    observations: [],
    assumptions: [],
    projects: [],
    detected: [],
    // TODO get related evidence after you query related object
  }

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

export async function detection(
  req: Request<
    unknown,
    unknown,
    { title?: string; content?: string; transcriptObject?: TranscriptObject }
  >,
  _: Response,
  next: NextFunction
) {
  try {
    if (req.body.content) {
      req.related = await setRelated(req.body.content)
      return next()
    }

    if (req.body.transcriptObject) {
      const { transcriptObject: t } = req.body
      const combined = t.map(({ transcript }) => transcript).join(' ')
      req.related = await setRelated(combined)
      return next()
    }

    return next()
  } catch (error) {
    return next(error)
  }
}
