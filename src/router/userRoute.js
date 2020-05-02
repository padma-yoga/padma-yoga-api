import { Router } from 'express'
import userController from '../controllers/userController'

const router = new Router()

const userRouteList = [
  router.post('/users', userController.create),
  router.get('/', userController.get),
  router.get('/users/:id', userController.getById),
  router.delete('/users/:id', userController.del),
  router.put('/users/:id', userController.update),
]

export default userRouteList
