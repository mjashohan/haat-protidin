const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())