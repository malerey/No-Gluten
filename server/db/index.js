const { Pool } = require('pg')

const pool = new Pool({
    user: 'DBUSER',
    host: 'DBHOST',
    database: 'DBNAME',
    password: 'DBPASSWORD',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
