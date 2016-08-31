var express = require('express');
var app = express();
var fs = require('fs');

app.get('/envia', function(req, res) {

   http.get('http://192.168.1.108:3000/recebe?nome=Moises', function(data){
      console.log('foi');
   });
   res.end();

});


app.get('/retorna', function(req, res) {

    fs.writeFile("retorno_api.txt", req.query.nome, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Arquivo salvo");
    });

    res.send(req.query.nome);
});

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log('listening.... ', host, port);
});
