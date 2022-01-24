import { Request, Response } from 'express'
import UserService from './../services/user.service'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

function exclude<User, Key extends keyof User>(
  user: User,
  ...keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key]
  }
  return user
}

const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await UserService.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }
  if (user.status === false) {
    return res.status(400).json({
      message: 'User disabled, contact your manager for more informations',
    })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }

  const payload = {
    user: {
      id: user.id,
    },
  }

  jwt.sign(
    payload,
    process.env.JWT_SECRET!,
    { expiresIn: process.env.TOKEN_EXPIRATION! },
    async (err, token) => {
      if (err) {
        return res.status(500).json({ message: 'Server error' })
      }
      await UserService.update({ id: user.id, token })

      return res.json({
        token,
        expiresIn: process.env.TOKEN_EXPIRATION,
        createdAt: Date.now(),
      })
    }
  )
}

const me = async (req: Request, res: Response) => {
  const user = await UserService.findOne({ id: req.user.id })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }
  return res.json(exclude(user, 'password', 'id', 'token'))
}

const signout = async (req: Request, res: Response) => {
  await UserService.update({ id: req.user.id, token: null })
  return res.json({ message: 'Signout success' })
}

export default { signin, signout, me }
