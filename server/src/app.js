const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567',
    database: 'haat-protidin'
  })

  db.connect((err) => {
        if(err){
            throw err
        }
        console.log('Alhamdulillah, connection established')
    })

var server = {
    port: 3000
  }

  app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`))