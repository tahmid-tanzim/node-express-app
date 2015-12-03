var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.locals.pagetitle = 'Awesome Website';

/**
 * Express Routing
 * */
app.get('/', function (request, response) {
    response.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Tahmid', 'Tanzm', 'Lupin']
    });
});

app.get('/about', function (request, response) {
    response.render('default', {
        title: 'About Us',
        classname: 'about'
    });
});

app.get('*', function (request, response) {
    response.send('Bad Route');
});

var server = app.listen(3000, function () {
    console.log("Node server is running at 'http://localhost:3000'\nPress Ctrl+C to Exit.");
});
