import Joi from 'joi'

const create = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.date().optional(),
    phone: Joi.string().optional(),
    cpf: Joi.string().optional(),
    rg: Joi.string().optional(),
    address: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    cep: Joi.string().optional(),
    password: Joi.string().required().min(8),
    ruleId: Joi.number().optional(),
  }),
}

const update = {
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    birthDate: Joi.date().optional(),
    phone: Joi.string().optional(),
    cpf: Joi.string().optional(),
    rg: Joi.string().optional(),
    address: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    cep: Joi.string().optional(),
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

export default {
  create,
  remove,
  update,
}
