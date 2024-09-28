const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const buscarUsuario = async (NickName) => {
  const user = await User.findOne({ NickName })
  return user
}

const GetUsr = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      NickName: req.body.NickName,
      password: req.body.password,
      papel: 'user'
    })

    const usuarioDuplicado = await buscarUsuario(req.body.NickName)

    if (usuarioDuplicado) {
      return res.status(400).json('este nombre ya esta cogido')
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await buscarUsuario(req.body.NickName)

    if (!user) {
      return res.status(400).json('El usuario no existe')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('wrong password')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { GetUsr, register, login }
