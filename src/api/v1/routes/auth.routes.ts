import express from 'express'
import { validate } from 'express-validation'
import AuthController from '../controllers/auth.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
import AuthValidator from './../validators/auth.validator'

const router = express.Router()

router
  .route('/signin')
  .post(validate(AuthValidator.signin), AuthController.signin)
router.route('/signout').post(AuthMiddleware, AuthController.signout)
router.route('/me').get(AuthMiddleware, AuthController.me)

export default router
