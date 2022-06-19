var http = require('http');
var fs = require('fs');

const logger = require('cat-loggr');

http.createServer(function (req, res) {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});
    logger.log('Hello, world!');
    //Create a JSON
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}

	res.end( JSON.stringify(json_response) ); 

}).listen(3000);
