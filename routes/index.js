var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home template. */
router.get('/', function (req, res) {
    var myArtwork = [];
    appdata.speakers.forEach(function (item) {
        myArtwork = myArtwork.concat(item.artwork);
    });

    res.render('index', {
        title: 'Home',
        artwork: myArtwork
    });
});

/* GET speakers template. */
router.get('/speakers', function (req, res) {
    var myArtwork = [];
    appdata.speakers.forEach(function (item) {
        myArtwork = myArtwork.concat(item.artwork);
    });

    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork
    });
});

/* GET speakers/:id template. */
router.get('/speakers/:speakerid', function (req, res) {
    var myArtwork = [];
    appdata.speakers.forEach(function (item) {
        if(item.shortname == req.params.speakerid) {
            myArtwork = myArtwork.concat(item.artwork);
        }
    });

    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork
    });
});

module.exports = router;
