import Joi from 'joi'

const create = {
  body: Joi.object({
    companyName: Joi.string().required(),
    tradingName: Joi.string(),
    cnpj: Joi.string(),
  }),
}

const update = {
  body: Joi.object({
    companyName: Joi.string(),
    tradingName: Joi.string(),
    cnpj: Joi.string(),
    status: Joi.boolean(),
  }),
  params: Joi.object({
    id: Joi.number().required(),
  }),
}

const remove = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
}

const findOne = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
}

export default {
  create,
  remove,
  update,
  findOne,
}
