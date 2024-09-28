console.log('todo bien')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { connectDB } = require('./src/config/db')

const animesRouter = require('./src/api/routes/anime')

const creadoresRouter = require('./src/api/routes/BrandCreator')
const usersRoutes = require('./src/api/routes/users')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/plataformas', creadoresRouter)
app.use('/api/v1/animes', animesRouter)
app.use('/api/v1/users', usersRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000 ')
})
