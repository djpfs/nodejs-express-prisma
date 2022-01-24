import Joi from "joi";

const signin = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
    })
}

export default  {
    signin,
}

