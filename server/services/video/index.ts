import { v2 } from 'cloudinary'
import { NextFunction, Request, Response, Router } from 'express'
import multer from 'multer'

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
    })

    if (!video) {
      return res.status(400).json({ message: 'No video' })
    }

    return res
      .status(200)
      .json({ message: 'Video added', data: video.public_id })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

const videoRouter = Router()

videoRouter.route('/').post(singleVideoUpload, uploadVideo)

export default videoRouter
