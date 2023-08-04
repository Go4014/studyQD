const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'czg020525',
  database: 'db',
})

module.exports = db
