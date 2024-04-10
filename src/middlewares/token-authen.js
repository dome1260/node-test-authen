const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const secret_key = process.env.SECRET

const checkToken = (req, res, next) => {
  // console.log('headers => ', req.headers)

  const token = req.headers?.authorization?.split(' ')[1] || null
  const decoded = jwt.decode(token, secret_key)

  console.log('decode => ', decoded)

  // const verify = jwt.verify(token, secret_key)
  // console.log('verify => ', verify)

  if (token && decoded.exp <= Date.now() / 1000) {
    return res.status(401).json({
      code: 401,
      message: 'token expired'
    })
  }

  if (!token) {
    return res.status(403).json({
      code: 403,
      message: 'token unautorized'
    })
  }

  // if (!token) {
  //   console.log('test with no return')
  // }

  next()
}

const createToken = (payload) => {
  return jwt.sign(payload, secret_key, { expiresIn: '7d' })
}

module.exports = {
  checkToken,
  createToken
}
