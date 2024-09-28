const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    estilo: {
      type: String,
      required: true,
      enum: ['miedo', 'acción', 'drama', 'deportes', 'comedia', 'psicologico']
    }
  },
  {
    timestamps: true,
    collection: 'animes'
  }
)
const anime = mongoose.model('animes', animeSchema, 'animes')
module.exports = anime
