var express = require('express');
var path = require('path');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/app'));

app.set('view engine' , 'html');
 // set the home page route
app.get('/', function(req, res) {
 res.sendFile('index.html')
});

app.listen(port, function() {
 console.log('Our app is running on http://localhost:' + port);
});