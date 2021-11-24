import expressConfig from './config/express'
import cors from './middlewares/cors'
import router from './routes'

async function startUp() {
  const app = await expressConfig()
  app.use(cors)
  app.use(router)
}

startUp()
