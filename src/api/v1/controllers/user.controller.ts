import UserService from '../services/user.service'
import { NextFunction, Request, Response } from 'express'
import { onlyFields } from '../../../utils/formaters'
import * as bcrypt from 'bcrypt'

const fieldsCreate = [
  'name',
  'email',
  'password',
  'ruleId',
  'cpf',
  'rg',
  'bithDate',
  'phone',
  'address',
  'city',
  'state',
  'zipcode',
]

const fieldsUpdate = [...fieldsCreate, 'status']

const findMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.findAll()
    res.status(200).json(users)
  } catch (e) {
    next(e)
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const users = await UserService.findOne({ id })
    res.status(200).json(users)
  } catch (e) {
    next(e)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(fieldsCreate, req.body)
    data.password = bcrypt.hashSync(
      data.password,
      parseInt(process.env.PASSWORD_SALT || '12')
    )
    const user = await UserService.create(data)
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(fieldsUpdate, req.body)
    const id = parseInt(req.params.id)
    const user = await UserService.update({ id, ...data })
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.remove({ id: parseInt(req.params.id) })
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const findBusinessByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id)
    const business = await UserService.findBusinessByUser({ id })
    res.status(200).json(business)
  } catch (e) {
    next(e)
  }
}

export default {
  create,
  remove,
  findMany,
  findOne,
  findBusinessByUser,
  update,
}
