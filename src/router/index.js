import { Router } from 'express'

const routes = new Router()

const routesList = [
  routes.get('/', function (request, response) {
    try {
      const data = { title: 'Padma Yoga API', version: '0.0.0' }
      return response.status(200).send(data)
    } catch (error) {
      return response
        .status(500)
        .send({ message: 'Falha ao processar sua requisição', error })
    }
  }),
]

export default routesList
