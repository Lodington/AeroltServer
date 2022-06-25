var http = require('http');
var fs = require('fs');
const CatLoggr = require('cat-loggr');

const logger = new CatLoggr();


logger.info("Starting Message Server");

http.createServer(function (req, res) {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});

	fs.readFile('message.txt', 'utf8', (err, data) => {
		if (err) {
			return console.log(err);
		}
		let json_response = {
			status : 200 , 
			Message : data,
			code : 200
		}

		logger.info(`Serving message to ${req.connection.remoteAddress.split(':')[3]}`);

		res.end(JSON.stringify(json_response)); 
		
	});


}).listen(80);
