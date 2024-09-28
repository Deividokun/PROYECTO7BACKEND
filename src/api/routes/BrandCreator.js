const { Admin } = require('../../middlewares/auth')
const {
  getCreadores,
  getCreadorId,
  postCreador,
  putCreador,
  deleteCreador
} = require('../crontollers/BrandCreator')

const creadoresRouter = require('express').Router()

creadoresRouter.get('/:id', getCreadorId)
creadoresRouter.get('/', getCreadores)
creadoresRouter.post('/', [Admin], postCreador)
creadoresRouter.put('/:id', [Admin], putCreador)
creadoresRouter.delete('/:id', [Admin], deleteCreador)

module.exports = creadoresRouter
