import RuleService from '../services/rule.service'
import { NextFunction, Request, Response } from 'express'
import { onlyFields } from '../../../utils/formaters'

const fieldsCreate = ['title', 'description']
const fildsUpdate = ['title', 'description', 'status']

const findMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await RuleService.findAll()
    res.status(200).json(users)
  } catch (e) {
    next(e)
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const users = await RuleService.findOne({ id })
    res.status(200).json(users)
  } catch (e) {
    next(e)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(fieldsCreate, req.body)
    const user = await RuleService.create(data)
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(fildsUpdate, req.body)
    const user = await RuleService.update({
      id: parseInt(req.params.id),
      ...data,
    })
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await RuleService.remove({ id: parseInt(req.params.id) })
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

export default {
  create,
  remove,
  findMany,
  update,
  findOne,
}
