/* eslint-disable import/no-unresolved */
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

function startServer(port, routes) {
  if (!port) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Routes is required to start server`)
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use('/', routes)
  app.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log(
      `Server running at port ${port} in ${process.env.NODE_ENV} mode`
    )
  )
}

export default startServer
