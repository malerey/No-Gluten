const { Pool } = require('pg')

const pool = new Pool({
    user: 'male',
    host: 'regina',
    database: 'male',
    password: 'ballena12sql',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
