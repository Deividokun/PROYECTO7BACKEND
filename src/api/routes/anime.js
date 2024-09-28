const { Admin, Auth } = require('../../middlewares/auth')
const {
  getAnimes,
  getAnimeId,
  getAnimeByStyle,
  getAnimeByPrice,
  postAnime,
  putAnime,
  deleteAnime
} = require('../crontollers/anime')

const animesRouter = require('express').Router()

animesRouter.get('/precio/:precio', getAnimeByPrice)
animesRouter.get('/categoria/:categoria', getAnimeByStyle)
animesRouter.get('/:id', getAnimeId)
animesRouter.get('/', getAnimes)
animesRouter.post('/', [Auth], postAnime)
animesRouter.put('/:id', [Admin], putAnime)
animesRouter.delete('/:id', [Admin], deleteAnime)

module.exports = animesRouter
