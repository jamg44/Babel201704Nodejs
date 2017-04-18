var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, response, next) {
  response.render('index', { title: 'NodeAPI' });
});

// parametros en la ruta
router.get('/parametros/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('req.params', req.params);
  res.send('ok');
});

router.get('/parametros/piso/:piso/puerta/:puerta', function(req, res, next) {
  console.log('req.params', req.params);
  res.send('varios params');
});

// parametros en la query-string
router.get('/parametros', function(req, res, next) {
  console.log('req.query', req.query);
  res.send('ok con query');
});

module.exports = router;
