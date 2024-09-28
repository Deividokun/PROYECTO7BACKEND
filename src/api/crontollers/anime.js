const anime = require('../models/anime')
const creador = require('../models/BrandCreator')
console.log(anime)
const getAnimes = async (req, res, next) => {
  try {
    const animes = await anime.find()
    return res.status(200).json(animes)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getAnimeId = async (req, res, next) => {
  try {
    const { id } = req.params
    const animes = await anime.findById(id)
    return res.status(200).json(animes)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getAnimeByStyle = async (req, res, next) => {
  try {
    const { estilo } = req.params
    const animes = await anime.find({ estilo })
    return res.status(200).json(animes)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getAnimeByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const animes = await anime.find({ precio: { $lte: precio } })
    return res.status(200).json(animes)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postAnime = async (req, res, next) => {
  try {
    const newAnime = new anime(req.body)
    const AnimeSave = await newAnime.save()
    return res.status(201).json(AnimeSave)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putAnime = async (req, res, next) => {
  try {
    const { id } = req.params
    const viejaCreador = await creador.findById(id)
    const newAnime = new anime(req.body)
    newAnime._id = id
    newAnime.anime
    const AnimeUpdated = await anime.findByIdAndUpdate(id, newAnime, {
      new: true
    })
    return res.status(200).json(AnimeUpdated)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteAnime = async (req, res, next) => {
  try {
    const { id } = req.params
    const AnimeDeleted = await anime.findByIdAndDelete(id)
    return res.status(200).json(AnimeDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getAnimes,
  getAnimeId,
  getAnimeByStyle,
  getAnimeByPrice,
  postAnime,
  putAnime,
  deleteAnime
}
