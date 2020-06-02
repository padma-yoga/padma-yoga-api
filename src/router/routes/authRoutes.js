import { Router } from 'express'
import authController from '../../controllers/authController'

const router = new Router()

const authRoutes = [
  router.post('/register', authController.register),
  router.post('/login', authController.login),
]

export default authRoutes
