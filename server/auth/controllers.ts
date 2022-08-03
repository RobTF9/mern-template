import { RequestHandler } from 'express'
import User from '../resources/user/model'

export const signIn: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'need email and password', auth: false })
    }

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(401).json({
        message: 'invalid email and password',
        auth: false,
      })
    }

    const match = user && user.checkPassword(req.body.password)

    if (!match) {
      return res.status(401).json({
        message: 'invalid email and password',
        auth: false,
      })
    }

    req.session.user = `${user._id}`

    return res.status(201).send({
      message: 'successful sign in',
      auth: true,
    })
  } catch (error) {
    return next(error)
  }
}

export const signUp: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      return res.status(400).json({
        message: 'need username and password',
        auth: false,
      })
    }

    const emailExists = await User.findOne({ email: req.body.email })

    if (emailExists) {
      return res.status(400).json({
        auth: false,
        message: 'email in use',
      })
    }

    const usernameExists = await User.findOne({ username: req.body.username })

    if (usernameExists) {
      return res.status(400).json({
        auth: false,
        message: 'email in use',
      })
    }

    const user = await User.create(req.body)
    req.session.user = `${user._id}`

    return res.status(201).send({
      auth: true,
      message: 'sign up successfull',
    })
  } catch (error) {
    return next(error)
  }
}

export const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'not authorised', auth: false })
    }

    const user = await User.findById(req.session.user)

    if (!user) {
      return res.status(401).json({ message: 'not authorised', auth: false })
    }

    return res.status(200).json({ auth: true, message: 'authorised' })
  } catch (error) {
    return next(error)
  }
}

export const signOut: RequestHandler = async (req, res, next) => {
  try {
    return req.session.destroy(() =>
      res.json({
        auth: false,
        message: 'signed out',
      })
    )
  } catch (error) {
    return next(error)
  }
}
