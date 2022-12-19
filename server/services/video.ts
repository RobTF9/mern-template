import { v2 } from 'cloudinary'
import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
import config from '../config'

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

// middleware
export const multerMiddleware = multer({
  storage,
}).single('video')

export async function uploadVideo(
  req: Request,
  res: Response,
  next: NextFunction
) {
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

    const version = video.version + 1

    req.body = {
      video: video.secure_url,
      transcript: `https://res.cloudinary.com/dlhk8zpa5/raw/upload/v${version}/${video.public_id}.transcript`,
    }

    return next()
  } catch (error) {
    return next(error)
  }
}

// async function getTranscript(req: Request, res: Response, next: NextFunction) {
//   const transcript = cloudinary.url(
//     `https://res.cloudinary.com/dlhk8zpa5/raw/upload/v1671208577/${req.params.id}.transcript`
//   )

//   try {
//     const response = await fetch(transcript)
//     const json = await response.json()
//     return res.status(200).json({ data: { ...json } })
//   } catch (error) {
//     return next(error)
//   }
// }
