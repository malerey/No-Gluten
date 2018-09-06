const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()


router.get('/:tipo_producto', async (req, res) => {
  const { tipo_producto } = req.params
  const { rows } = await db.query('SELECT * FROM anmat WHERE tipo_producto = $1', [tipo_producto])

  // const { rows } = await db.query('SELECT * FROM anmat t WHERE t::text LIKE '%query%'')
  res.send(rows)
})


module.exports = router




