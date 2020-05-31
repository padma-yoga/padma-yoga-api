import apiVersion from './routes/apiVersion'
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'

const routesList = [...apiVersion, ...authRoutes, ...userRoutes]

export default routesList
