import express from 'express'
import { validate } from 'express-validation'
import BusinessController from '../controllers/business.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
import BusinessValidator from './../validators/business.validator'

const router = express.Router()

router.route('/').get(AuthMiddleware, BusinessController.findMany)
router
  .route('/')
  .post(
    validate(BusinessValidator.create),
    AuthMiddleware,
    BusinessController.create
  )
router
  .route('/:id')
  .get(
    validate(BusinessValidator.update),
    AuthMiddleware,
    BusinessController.findOne
  )
router
  .route('/:id/users')
  .get(AuthMiddleware, BusinessController.findUsersByBusiness)
router
  .route('/:id')
  .put(
    validate(BusinessValidator.update),
    AuthMiddleware,
    BusinessController.update
  )
router
  .route('/:id')
  .delete(
    validate(BusinessValidator.remove),
    AuthMiddleware,
    BusinessController.remove
  )

export default router
