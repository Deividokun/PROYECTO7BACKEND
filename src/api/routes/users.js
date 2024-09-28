const { Admin } = require('../../middlewares/auth')
const { register, login, GetUsr } = require('../crontollers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [Admin], GetUsr)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)

module.exports = usersRoutes
