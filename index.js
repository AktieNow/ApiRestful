var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/servidor', function(req, res) {
  console.log('req.params', req);
  res.send('Meet11 - ' + req.query.nome );
  //res.writeHead(301, {Location: 'http://localhost:3000/meet'});
  //res.end();
});

/*app.get('/server', function(req, res) {
  console.log('aki');
  res.send('A rota esta certa - ');
});*/

//app.use('meet/', require('./api/meet.js'));

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log('listening.... ', host, port);
});

/*const express = require('express');

var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");//TODO subdominios que podem ter acesso
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "X-Requested-With");
    next();
});

app.use('meet/', require('./api/meet.js'));

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
*/