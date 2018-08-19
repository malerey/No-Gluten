const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()


// router.get('/:query', async (req, res) => {
//   const { query } = req.params
//   const { rows } = await db.query('SELECT * FROM anmat WHERE denominacion_venta LIKE '%query%'', [query])
//   res.send(rows[0])
// })


router.get('/:query', async (req, res) => {
  let { query } = req.params
  query = "%" + query + "%"
  const { rows } = await db.query('SELECT * FROM anmat t WHERE t::text LIKE $1', [query])
  
  res.send(rows)
})


module.exports = router




