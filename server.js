var express = require('express');
//var bodyParser = require('body-parser');
var portno = 3000;   
var app = express();
// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));
//app.use(bodyParser.json());
var server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});

//configure routes
app.get('/other/:username', function (request, response) {
 // Express parses the ":username" from the URL and returns it in the request.params objects.
     var param = request.params.username;
	 console.log("param:"+param);
	 response.redirect('/other');
});
/**
 * logs in a user
 * expectations: following properties must be found in the body
 *  1. login_name
 */
app.post('/other', function(req, res) {
    // 1. retrieve user credentials from the body
    const username = req.body.username;
});


//reconfigure all usused routes, redirect black magic because of html5 true
app.get('*', function (request, response) {
	var path =  __dirname +"/"+ "index.html";
	response.sendFile(path);
});












