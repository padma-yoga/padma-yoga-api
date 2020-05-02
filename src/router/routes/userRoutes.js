import { Router } from 'express'
import userController from '../../controllers/userController'

const router = new Router()
const prefix = '/users'

const userRouteList = [
  router.post(`${prefix}/signup`, userController.signup),
  router.get(`${prefix}`, userController.get),
  router.get(`${prefix}/:id`, userController.getById),
  router.delete(`${prefix}/:id`, userController.deleteById),
  router.put(`${prefix}/:id`, userController.update),
]

export default userRouteList
