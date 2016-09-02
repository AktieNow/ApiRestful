var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  //res.status(24).json({ nome: 'Raul' });
  res.send({ nome: 'Teste' });


});

router.post('/ticket', function(req, res, next) {
   res.render('index', { title: 'Post Retornado1' });
});

router.put('/', function(req, res, next) {
  res.render('index', { title: 'Put Retornado' });
});

router.delete('/', function(req, res, next) {
  res.render('index', { title: 'Delete Retornado' });
}); 

router.get('*', function(req, res, next) {
  //res.status(24).json({ nome: 'Raul' });
  res.send(404, 'deu merda!');

});


module.exports = router;

