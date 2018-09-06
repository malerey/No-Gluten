const { Pool } = require('pg')

const pool = new Pool({
    user: 'ASK ME FOR THIS INFO',
    host: 'ASK ME FOR THIS INFO',
    database: 'ASK ME FOR THIS INFO',
    password: 'ASK ME FOR THIS INFO',
    port: 'ASK ME FOR THIS INFO',
  })

module.exports = {
  query: (text, params) => pool.query(text, params)
}
