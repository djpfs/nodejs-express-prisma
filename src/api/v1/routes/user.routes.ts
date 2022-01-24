import express from 'express'
import { validate } from 'express-validation'
import UserController from '../controllers/user.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
import UserValidator from './../validators/user.validator'

const router = express.Router()

const hasPermission = (req: any, res: any, next: any, rules: number[]) => {
  const rule = rules.includes(req.user.ruleId)
  if (rule === true) {
    next()
  } else {
    res.status(403).json({
      message: 'You do not have permission to access this resource',
    })
  }
}

router.route('/').get(AuthMiddleware, UserController.findMany)
router
  .route('/')
  .post(validate(UserValidator.create), AuthMiddleware, UserController.create)

router.route('/:id').get(AuthMiddleware, UserController.findOne)
router
  .route('/:id/business')
  .get(AuthMiddleware, UserController.findBusinessByUser)
router
  .route('/:id')
  .put(validate(UserValidator.update), AuthMiddleware, UserController.update)
router
  .route('/:id')
  .delete(validate(UserValidator.remove), AuthMiddleware, UserController.remove)

export default router
