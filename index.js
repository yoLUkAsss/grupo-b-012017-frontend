var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  console.log(path.join(__dirname + '/index.html'));
  response.sendFile( path.join(__dirname + '/views/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
