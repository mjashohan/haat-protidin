const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const db = require('./models/index')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/query', db)


app.listen( config.port , () => console.log(`Server started, listening port: ${config.port}`))