var moment = require('moment');
var express = require('express');
var app = express();

//app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));

app.get('/',function(req, res) {
    
});


app.get('/:time', function (req, res) {
    
    var time = req.params.time;
    var html = {};
    
    var regex = /^[0-9]{10}/;
    if(regex.test(time)) {
        console.log('unix timestamp');
        time *=1000;
    }
    
    if(moment(time).isValid()) {
        html.unix = moment(time).format('X');
        html.natural = moment(time).format('MMMM Do, YYYY');
    } else {
        html.unix = 'null';
        html.natural = 'null';
    }
    res.send(html);
});


app.listen(8080, function () {
    console.log('server up!');
});