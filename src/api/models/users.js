const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schemaModelUser = new mongoose.Schema(
  {
    NickName: { type: String, required: true },
    password: { type: String, required: true },
    papel: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

schemaModelUser.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 15)
})

const User = mongoose.model('users', schemaModelUser, 'users')
module.exports = User
