var express = require('express');
var app = express();

/**
 * Express Routing
 * */
app.get('/', function (request, response) {
    response.send("<strong>Hello</strong> Express!");
});

var server = app.listen(3000, function () {
    console.log("Node server is running at 'http://localhost:3000'\nPress Ctrl+C to Exit.");
});
