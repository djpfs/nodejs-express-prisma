import assert from 'node:assert'

const validateEnv = () => {
  assert(
    process.env.JWT_SECRET,
    '⚠️ JWT_SECRET is not defined in .env, see an example in .env.example'
  )
  assert(
    process.env.TOKEN_EXPIRATION,
    '⚠️ TOKEN_EXPIRATION is not defined .env, see an example in .env.example'
  )
}

export default validateEnv()
