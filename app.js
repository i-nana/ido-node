var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8333;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(__dirname + '/public/favicon.ico'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded  加载解析urlencoded的请求体中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


require('./routes/index')(app);

app.listen(port, function() {
    console.log('iDo started on port ' + port);
});