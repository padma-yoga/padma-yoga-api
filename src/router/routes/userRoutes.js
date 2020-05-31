import { Router } from 'express'
import userController from '../../controllers/userController'

const router = new Router()
const prefix = '/users'

const userRoutes = [
  router.get(`${prefix}`, userController.getAll),
  router.get(`${prefix}/:id`, userController.getById),
  router.delete(`${prefix}/:id`, userController.deleteById),
  router.put(`${prefix}/:id`, userController.update),
]

export default userRoutes
