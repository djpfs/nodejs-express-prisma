import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import routes from './../api/v1/routes'
import errorHandler from './../api/v1/middlewares/error.middleware'
import cors from './cors'

const app = express()

app.use((req, _, next) => {
  req.headers.origin = req.headers.origin || req.headers.host
  next()
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())

app.use('/api/v1', routes)

app.use(errorHandler.notFound)
app.use(errorHandler.converter)
app.use(errorHandler.handler)

export default app
