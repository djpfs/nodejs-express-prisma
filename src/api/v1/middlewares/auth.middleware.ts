import { NextFunction, Request, Response } from 'express'
import userService from '../services/user.service'
import jwt, { TokenExpiredError } from 'jsonwebtoken'

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }
  token = token.split(' ')[1]

  jwt.verify(token, process.env.JWT_SECRET!, async (err: any, data: any) => {
    if (err) {
      if (err.message.includes('jwt expired')) {
        return res.status(401).json({ message: 'Token expired' })
      }
      return res.status(401).json({ message: 'Invalid token' })
    }
    const user = await userService.findOne({ id: data.user.id })
    // if user is not found
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' })
    }
    // if user is disabled
    if (user.status === false) {
      return res.status(400).json({
        message: 'User disabled, contact your manager for more informations',
      })
    }
    // if token revoked
    if (user.token !== token) {
      return res.status(400).json({ message: 'Invalid token' })
    }
    req.user = await userService.findOne({ id: data.user.id })
    next()
  })
}

export default AuthMiddleware
