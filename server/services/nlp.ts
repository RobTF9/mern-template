import { NextFunction, Request, Response } from 'express'
import WinkFn from 'wink-nlp'
import model from 'wink-eng-lite-web-model'
import Observation from '../resources/observation/model'
import Assumption from '../resources/assumption/model'
import Project from '../resources/project/model'

const languageProcessor = WinkFn(model)

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

languageProcessor.learnCustomEntities(patterns)

export default languageProcessor

export async function detection(req: Request, _: Response, next: NextFunction) {
  try {
    const related: {
      observations: ObservationResource[]
      assumptions: AssumptionResource[]
      projects: ProjectResource[]
    } = {
      observations: [],
      assumptions: [],
      projects: [],
      // evidence: [],
    }
    if (req.body.title) {
      const doc = languageProcessor.readDoc(req.body.title)
      const detectedEntities = doc.customEntities().out()
      console.log('Title: ' + detectedEntities)
    }

    if (req.body.content) {
      const doc = languageProcessor.readDoc(req.body.content)
      const detectedEntities = doc.customEntities().out()
      const regex = detectedEntities.map((e) => new RegExp(e, 'i'))

      const relatedObservation = await Observation.find({
        content: { $in: regex },
      })
      related.observations = [...relatedObservation]

      const relatedAssumptions = await Assumption.find({
        content: { $in: regex },
      })
      related.assumptions = [...relatedAssumptions]

      const relatedProject = await Project.find({
        content: { $in: regex },
      })
      related.projects = [...relatedProject]
    }

    req.related = related

    return next()
  } catch (error) {
    return next(error)
  }
}
