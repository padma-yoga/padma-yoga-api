import dotenv from 'dotenv'
import startDatabase from './config/database'
import startServer from './config/server'
import routesList from './router'

dotenv.config()

const { CONNECTION_STRING, PORT } = process.env

const database = startDatabase(CONNECTION_STRING)
const server = startServer(PORT, routesList)

export default { server, database }
