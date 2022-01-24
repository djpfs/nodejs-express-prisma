import UserRoutes from './user.routes'
import AuthRoutes from './auth.routes'
import RuleRoutes from './rule.routes'
import BusinessRoutes from './business.routes'

import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

router.use('/users', UserRoutes)
router.use('/auth', AuthRoutes)
router.use('/rules', RuleRoutes)
router.use('/business', BusinessRoutes)

export default router
