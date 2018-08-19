var express = require('express');
var router = express.Router();
const producto = require('./producto')
const busqueda = require('./busqueda')
const categoria = require('./categoria')

router.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

/* GET home page. */

module.exports = (app) => {
  app.use('/producto', producto)
  app.use('/busqueda', busqueda)
  app.use('/categoria', categoria)
  // etc..
}
