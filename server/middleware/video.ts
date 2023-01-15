import { v2 } from 'cloudinary'
import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
import fetch from 'node-fetch'
import config from '../config'
import Evidence from '../resources/evidence/model'
import RelatedModel from '../resources/related/model'
import { ERROR_MESSAGE } from '../utils/messages'

type FileNameCallback = (error: Error | null, filename: string) => void

const cloudinary = v2

cloudinary.config({
  secure: true,
  ...config.cloudinary,
})

const storage = multer.diskStorage({
  filename: (
    _,
    file: Express.Multer.File,
    callback: FileNameCallback
  ): void => {
    callback(null, Date.now() + file.originalname)
  },
})

export const multerMiddleware = multer({
  storage,
}).single('video')

export async function uploadVideo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { participant, project } = req.body

    if (!req.file) {
      return res.status(400).json({ message: 'No file' })
    }

    const video = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video',
      raw_convert: 'google_speech',
      notification_url:
        process.env.NODE_ENV === 'dev'
          ? 'https://basis-test.loca.lt/hook'
          : 'https://bas-wb3t.onrender.com/hook',
    })

    if (!video) {
      return res.status(400).json({ message: 'No video' })
    }

    const version = video.version + 1

    req.body = {
      video: video.secure_url,
      transcript: `https://res.cloudinary.com/dlhk8zpa5/raw/upload/v${version}/${video.public_id}.transcript`,
      public_id: video.public_id,
      transcriptObject: undefined,
      participant,
      project,
    }

    return next()
  } catch (error) {
    return next(error)
  }
}

export async function getTranscript(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(
    '====================== TRANSCRIPT MIDDLEWARE ======================'
  )
  console.log(req.body)
  try {
    if (
      req.body.info_kind === 'google_speech' &&
      req.body.info_status === 'complete'
    ) {
      const evidence = await Evidence.findOne({ public_id: req.body.public_id })
      if (!evidence) {
        return res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND('evidence') })
      }
      const response = await fetch(evidence.transcript)
      const json = await response.json()

      req.body.transcriptObject = json
      return next()
    }
    return res.sendStatus(200)
  } catch (error) {
    return next(error)
  }
}

export async function updateEvidenceWithTranscript(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const evidence = await Evidence.findOneAndUpdate(
      {
        public_id: req.body.public_id,
      },
      { transcriptObject: req.body.transcriptObject }
    )
      .lean()
      .exec()

    if (evidence) {
      await RelatedModel.create({
        ...req.related,
        parentId: `${evidence._id}`,
        parentType: `evidence`,
        createdBy: evidence.createdBy,
        updatedBy: evidence.createdBy,
      })

      return res.sendStatus(200)
    }

    return res.sendStatus(200)
  } catch (error) {
    return next(error)
  }
}