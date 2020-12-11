var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('change me '); // change tihs to respond succes auth of desudo
});

app.listen(8080, function() { // change this 8080 to desudo's port 
  console.log('Desudo cracked !');
});

// go to hosts file in winows
// and put :
// 127.0.0.1 respectthedripkaren.xyz