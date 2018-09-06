const { Pool } = require('pg')

const pool = new Pool({
    user: 'male',
    host: '5d640511d691.sn.mynetname.net',
    database: 'male',
    password: 'ballena12sql',
    port: 5432,
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
