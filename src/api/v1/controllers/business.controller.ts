import BusinessService from '../services/business.service'
import { NextFunction, Request, Response } from 'express'
import { onlyFields } from '../../../utils/formaters'

const updateFields = ['companyName', 'tradingName', 'cnpj', 'status']
const createFields = ['companyName', 'tradingName', 'cnpj']

const findMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const business = await BusinessService.findAll()
    res.status(200).json(business)
  } catch (e) {
    next(e)
  }
}

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const users = await BusinessService.findOne({ id })
    res.status(200).json(users)
  } catch (e) {
    next(e)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(createFields, req.body)
    const business = await BusinessService.create(data)
    res.status(200).json(business)
  } catch (e) {
    next(e)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = onlyFields(updateFields, req.body)
    const id = parseInt(req.params.id)
    const business = await BusinessService.update({ id, ...data })
    res.status(200).json(business)
  } catch (e) {
    next(e)
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const business = await BusinessService.remove({ id })
    res.status(200).json(business)
  } catch (e) {
    next(e)
  }
}

const findUsersByBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id)
    const business = await BusinessService.findUsersByBusiness({ id })
    res.status(200).json(business)
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
  findUsersByBusiness,
}
