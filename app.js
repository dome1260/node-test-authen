const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

require('./src/configs/mongodb.config')

const userRouter = require('./src/modules/user/user.route')
const authRouter = require('./src/modules/auth/auth.route')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', userRouter)
app.use('/auth', authRouter)

dotenv.config()

const port = 3000

app.get('/', (req, res) => {
  res.send(`Server test authen is running ...`)
})

app.listen(port, () => {
  console.log(`Server test authen is running on ${port}`)
})
