var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = 3000;


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
// app.get('/', function(req, res) {
// 	res.send('Hello Express');
// });

app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function() {
	console.log('Server started on prot: ' + PORT + '!');
});