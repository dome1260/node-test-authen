const userService = require('../services/user.service')

const userController = {
  createUser: async (req, res) => {
    try {
      const payload = req.body

      const data = await userService.create(payload)

      res.status(200).json({
        success: true,
        data
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        messsage: error?.messsage
      })
    }
  },

  getAllUser: async (req, res) => {
    try {
      const data = await userService.getAll({ status: 'active' })

      res.status(200).json({
        success: true,
        data
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        messsage: error?.messsage
      })
    }
  }
}

module.exports = userController
