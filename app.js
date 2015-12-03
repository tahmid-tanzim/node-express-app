var http = require('http');
var myServer = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.write("Hello World");
    response.end();
});

myServer.listen(3000);