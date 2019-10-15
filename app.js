// clall express
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser");
var express = require("express");  //saying we require it
var app = express();   //this variable is going to call express
var port = process.env.PORT || 3000;   //andre  for maintainablility





app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ encoded: true}));
var task = ["clean", "laundry"];

// single slash is home page
app.get('/', function(req, res){
res.render('index', {task:task});

});

app.post('/addtask',function(req, res){
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect('/');
});

http.createServer(app).listen(port, function(){

});