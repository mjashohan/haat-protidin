const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const db = require('./models/index')
const path = require('path')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.use(cors())
app.use('/query', db)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html/'));
});

app.listen( config.port , () => console.log(`Server started, listening port: ${config.port}`))