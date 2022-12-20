import { NextFunction, Request, Response } from 'express'
import WinkFn from 'wink-nlp'
import model from 'wink-eng-lite-web-model'

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
    if (req.body.title) {
      const doc = languageProcessor.readDoc(req.body.title)
      const detectedEntities = doc.customEntities().out()
      console.log('Title: ' + detectedEntities)
    }

    if (req.body.content) {
      const doc = languageProcessor.readDoc(req.body.content)
      const detectedEntities = doc.customEntities().out()
      // const regex = detectedEntities.map((e) => new RegExp(e, 'i'))
      // const existingEntities = await getEntities({
      //   key: { $in: regex },
      // })
      console.log('Content: ' + detectedEntities)
    }

    return next()
  } catch (error) {
    return next(error)
  }
}
