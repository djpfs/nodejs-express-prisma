import Joi from "joi";

const create = {
    body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
    })
}

const update = {
    body: Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        status: Joi.boolean()
    }),
    params: Joi.object({
        id: Joi.number().required()
    })
}

const remove = {
    params: Joi.object({
        id: Joi.number().required()
    })
}

export default  {
    create,
    remove,
    update
}

