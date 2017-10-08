"use strict";

let http = require('http');
let fs = require('fs');

http.createServer( (request,response) => {
	if(request.method == 'GET'){
		if(request.statusMessage == "record") response.write("[Medical record goes here]");
		else fs.createReadStream('./index.html').pipe(response);
	}else{
		response.writeHead(400, {"Content_Type" : "text/plain"});
		response.write("Error 400 bad request");
	}
	console.log(request.method);
}).listen(80);


