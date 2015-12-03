var express = require('express');
var app = express();

/**
 * Express Routing
 * */
app.get('/', function (request, response) {
    response.send("<strong>Hello</strong> Express!");
});

app.get('/me', function (request, response) {
    response.send('@TahmidTanzim');
});

/* http://localhost:3000/who/Tahmid%20Tanzim */
app.get('/who/:name?', function (request, response) {
    var name = request.params.name;
    response.send('Hello! ' + name);
});

/* http://localhost:3000/who/Tahmid%20Tanzim/Software%20Engineer */
app.get('/who/:name?/:title?', function (request, response) {
    var name = request.params.name;
    var title = request.params.title;
    response.send('<p>Name: ' + name + '<br>Title: ' + title + '</p>');
});

app.get('*', function (request, response) {
    response.send('Bad Route');
});

var server = app.listen(3000, function () {
    console.log("Node server is running at 'http://localhost:3000'\nPress Ctrl+C to Exit.");
});
