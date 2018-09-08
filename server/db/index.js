const { Pool } = require('pg')
const { HOSTINDEX, PASSINDEX } = process.env


const pool = new Pool({
    user: 'male',
    host: HOSTINDEX,
    database: 'male',
    password: PASSINDEX,
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
