// clall express

const express = require("express");  //saying we require it
const app = express();   //this variable is going to call express
const port = process.env.PORT || 3000;   //andre  for maintainablility

// single slash is home page
app.get('/', function(req, res){
res. send("hello clair");

});

app.get('/about',function(req, res){
    res.send("<h1>same hoes</h1>");
});

app.listen(port, function(){

});