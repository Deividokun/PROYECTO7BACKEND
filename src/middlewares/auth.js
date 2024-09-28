const User = require('../api/models/users')
const { verifyJwt } = require('../config/jwt')

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(400).json('No puedes')
  }
}

const Admin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(400).json('Solo para los adminitradores')
    }
  } catch (error) {
    return res.status(400).json('No puedes')
  }
}

module.exports = { Auth, Admin }
