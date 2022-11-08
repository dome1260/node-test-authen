const userModel = require('../models/user.schema')

const userService = {
  create: (payload) => {
    return new userModel(payload).save()
  },

  getAll: (query) => {
    return userModel.find({ ...query })
  },

  getOne: (query) => {
    return userModel.findOne({ ...query })
  }
}

module.exports = userService
