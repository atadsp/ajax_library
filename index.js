/*	var app = require('express')();

	var httpListeningTool = require('http').Server(app);
	app.get('/', function(request, response){
		response.send('<h1>Hello World</h1>')
	});

	httpListeningTool.listen(3000, function(){
		console.log('listening on *:3000')
		});
		*/

		var app = require('express')();
		var http = require("http").Server(app);

		app.get('/', function(req, res){
			res.sendFile(__dirname +'/index.html');
		});

		http.listen(3000,function(){
			console.log('listening on *:3000');
		});