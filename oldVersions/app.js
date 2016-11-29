var express = require('express');
var app = express();
var routes = require('./routes');
app.set('view engine', 'ejs');

app.use(express.static('public')); //for some reason this needs to be above the app.get'*'

//pages are inside routes folder

app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);

app.get('*', function(req, res){
    res.send('Bad Route');
});


var server = app.listen(3000, function(){
    console.log('listening on port 3000');
});