const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()


router.get('/:categoria', async (req, res) => {
  const { categoria } = req.params
  const { rows } = await db.query('SELECT * FROM anmat WHERE tipo_producto = $1', [categoria])

  // const { rows } = await db.query('SELECT * FROM anmat t WHERE t::text LIKE '%query%'')
  res.send(rows[0])
})


module.exports = router




