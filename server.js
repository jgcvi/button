var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyPaser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/items');

var app = express();

app.set('views, path.join(__dirname, 'views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.user(logger('dev'));
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.usse('/api/v1/', todos);
var server = app.listen(3000, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
