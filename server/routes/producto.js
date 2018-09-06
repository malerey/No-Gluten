const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()


router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM anmat WHERE id = $1', [id])

  // const { rows } = await db.query('SELECT * FROM anmat t WHERE t::text LIKE '%query%'')
  res.send(rows)
})


module.exports = router




