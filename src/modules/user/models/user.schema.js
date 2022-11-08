const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  tel: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'active'
  }
}, { timestamps: true, strict: true })

const userModel = model('users', userSchema)

module.exports = userModel
