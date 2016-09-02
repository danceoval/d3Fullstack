var express = require('express');
var app = express();

app.use(express.static('public'));

//Add index file to path
app.get('/', function(req, res){
  res.render('index');
});

//Listen on port 3000
app.listen(1337, function(){
  console.log('listening on Port 1337');
});


module.exports = app;