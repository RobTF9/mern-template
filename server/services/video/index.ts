import { v2 } from 'cloudinary'
import { NextFunction, Request, Response, Router } from 'express'
import multer from 'multer'
import fetch from 'node-fetch'

type FileNameCallback = (error: Error | null, filename: string) => void

const cloudinary = v2

cloudinary.config({
  secure: true,
})

const storage = multer.diskStorage({
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ): void => {
    console.log(req)
    callback(null, Date.now() + file.originalname)
  },
})

// middleware
const singleVideoUpload = multer({
  storage,
}).single('video')

async function uploadVideo(req: Request, res: Response, next: NextFunction) {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file' })
    }

    const video = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video',
      raw_convert: 'google_speech',
    })

    if (!video) {
      return res.status(400).json({ message: 'No video' })
    }

    return res.status(200).json({ message: 'Video added', data: { ...video } })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

async function getTranscript(req: Request, res: Response, next: NextFunction) {
  const transcript = cloudinary.url(
    `https://res.cloudinary.com/dlhk8zpa5/raw/upload/v1671208577/${req.params.id}.transcript`
  )

  try {
    const response = await fetch(transcript)
    const json = await response.json()
    return res.status(200).json({ data: { ...json } })
  } catch (error) {
    return next(error)
  }
}

const videoRouter = Router()

videoRouter.route('/').post(singleVideoUpload, uploadVideo)
videoRouter.route('/:id').get(getTranscript)

export default videoRouter
