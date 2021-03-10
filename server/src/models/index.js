const express = require('express')
const Router = express.Router()
const mysql = require('mysql')
const config = require('../config/config')

db = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
})

db.connect((err) => {
    if(err){
        throw err
    }
    console.log('Alhamdulillah, database connected')
})

Router.get('/admin', (req, res) => {
    db.query('SELECT * FROM admin', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = Router
