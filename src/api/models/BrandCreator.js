const mongoose = require('mongoose')

const creadorSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    anime: [{ type: mongoose.Types.ObjectId, ref: 'anime', required: false }]
  },
  {
    timestamps: true,
    collection: 'creadores'
  }
)

const creador = mongoose.model('creadores', creadorSchema, 'creadores')
module.exports = creador
