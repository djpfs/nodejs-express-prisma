import express from 'express'
import { validate } from 'express-validation'
import RuleController from '../controllers/rule.controller'
import RuleValidator from './../validators/rule.validator'

const router = express.Router()

router.route('/').get(RuleController.findMany)
router.route('/').post(validate(RuleValidator.create), RuleController.create)
router.route('/:id').get(validate(RuleValidator.update), RuleController.findOne)
router.route('/:id').put(validate(RuleValidator.update), RuleController.update)
router
  .route('/:id')
  .delete(validate(RuleValidator.remove), RuleController.remove)

export default router
