var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.locals.pagetitle = 'Awesome Website';

/**
 * Express Routing
 * */
app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function (request, response) {
    response.send('Bad Route');
});

var server = app.listen(3000, function () {
    console.log("Node server is running at 'http://localhost:3000'\nPress Ctrl+C to Exit.");
});
