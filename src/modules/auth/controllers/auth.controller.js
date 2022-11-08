const userService = require('../../user/services/user.service') // mongodb
const { createToken } = require('../../../middlewares/token-authen')
// const { collection, query, where, getDocs } = require("firebase/firestore") // firebase

const authController = {
  login: async (req, res) => {
    try {
      const { firstName, lastName } = req.body

      // ดึงข้อมูลมาเช็ค ว่ามีอยู่จริงไหม
      const user = await userService.getOne({ firstName, lastName, status: 'active' }) // mongo db

      //firebase
      // const user = await query(collection(db, "users"), where("username", "==", "admin"), where("password", "==", "1234"))

      if (user) {

        const token = createToken({ //jaksjdkajdlkahsdljahsdlashdjasd
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName
        })

        res.status(200).json({
          success: true,
          accessToken: token
        })

      } else {
        res.status(401).json({
          success: false,
          message: 'firstname or lastname invalid'
        })
      }

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error?.message
      })
    }
  }
}

module.exports = authController
