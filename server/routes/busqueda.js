const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()


router.get('/:query', async (req, res) => {
  let { query } = req.params
  let limit = req.query.limit
  let offset = req.query.offset
  query = "%" + query + "%"
  const { rows } = await db.query('SELECT *, count(*) OVER() AS full_count FROM anmat t WHERE t::text LIKE $1 LIMIT $2 OFFSET $3', [query, limit, offset])

  res.send(rows)
})


module.exports = router




