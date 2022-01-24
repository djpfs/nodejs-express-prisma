import app from './config/express'
import 'dotenv/config'
import './utils/env'

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`API server ready at: http://localhost:${port}`)
)
