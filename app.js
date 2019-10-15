// clall express
var http = require('http');
var path = require('path');
const express = require("express");  //saying we require it
const app = express();   //this variable is going to call express
const port = process.env.PORT || 3000;   //andre  for maintainablility


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// single slash is home page
app.get('/', function(req, res){
res.render('index');

});

app.get('/about',function(req, res){
    res.send("<h1>same hoes</h1>");
});

http.createServer(app).listen(port, function(){

});