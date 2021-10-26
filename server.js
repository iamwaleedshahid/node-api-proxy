const express = require('express')
const app = express()
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

port = process.env.port || 3000

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
})

app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('public'))

app.use(cors())

app.use('/api', require('./routes'))


app.listen(port, () => console.log(`Server running on port: ${port}`))