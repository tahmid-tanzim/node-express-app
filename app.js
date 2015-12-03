var http = require('http');
var myServer = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write("<strong>Hello</strong> World");
    response.end();
});

myServer.listen(3000);
console.log("Node server is running at 'http://localhost:3000'\nPress Ctrl+C to Exit.");