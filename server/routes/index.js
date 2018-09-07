// var express = require('express');
// var router = express.Router();
// const producto = require('./producto')
// const busqueda = require('./busqueda')
// const categoria = require('./categoria')


// /* GET home page. */
// router.all('/*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   next();
// });

// module.exports = (app) => {
//   app.use('/producto', producto)
//   app.use('/busqueda', busqueda)
//   app.use('/categoria', categoria)
//   // etc..
// }


// var express = require('express');
// var router = express.Router();
// const producto = require('./producto')
// const busqueda = require('./busqueda')
// const categoria = require('./categoria')
// const mail = require('./mail')



// router.get('/producto', producto);
// router.get('/busqueda', busqueda);
// router.get('/categoria', categoria);

// module.exports = (app) => {
//   app.all('/*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
//     if (req.method === 'OPTIONS') {
//       res.sendStatus(204);
//     } else {
//       next();
//     }
//   });
  // app.use('/producto', producto)
  // app.use('/busqueda', busqueda)
  // app.use('/categoria', categoria)
  // // app.get('/mail', mail)
  // app.post('/mail', mail)
  // app.post('./send', mail)
  // etc..
// }



// module.exports = router;