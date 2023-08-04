import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'db',
  user: 'root',
  password: 'czg020525',
})

export default pool.promise()
