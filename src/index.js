import dotenv from 'dotenv'
import startDatabase from './config/database'
import startServer from './config/server'
import routesList from './router'

dotenv.config()

const { DATABASE, PORT } = process.env

const database = startDatabase(DATABASE)
const server = startServer(PORT, routesList)

export default { server, database }
