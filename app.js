
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser");
var express = require("express");  //saying we require it
var app = express();   //this variable is going to call express
var mongoose = require('mongoose');
const fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;   //andre  for maintainablility


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false}));
const Todo =require('./models/todo.model');    //changed here

const mongoDB = 'mongodb+srv://hooman:margretTHATCHERiscool@cluster0-rhcqr.mongodb.net/test?retryWrites=true&w=majority';
//connection string to db pasted from clusetr sandbox
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

//10 22
//removed item in array list
var task = [];
var complete = [];

// single slash is home page
app.get('/', function(req, res){
    Todo.find(function(err, todo){
        if(err){
            console.log(err);

        }else{
            res.json( );
        }
    })
    // not going to return change res render to json
    //willl sne dback a var


});
//ADD TASK
app.post('/addtask',function(req, res){

    let newTodo = new Todo({
        item: req.body.newtask,

        fin: false
    });

    newTodo.save(function(err){
        if(err){
            console.log(err);

        }
        res.redirect('/');

    });
});
//REMOVE TASK
app.post('/removetask',function(req, res){
    var completeTask = req.body.check;

    if(typeof completeTask ==='string'){
      Todo.updateOne({ item: completeTask}, {fin: true},function(err){
          console.log(err);
      })

    }else if (typeof completeTask === "object"){
        for(var i = 0; i < completeTask.length; i++){
            Todo.updateOne({item: completeTask[i]}, {fin: true},function(err){
                console.log(err);
            })

        }
    }
    res.redirect('/');
});
// DELETE TASK
app.post('/deleteTodo', function(req, res){
    var deleteTask = req.body.delete;
    if(typeof deleteTask =='string'){
        Todo.deleteOne({item: deleteTask}, function(err){
            console.log(err);
        });
    }else if(typeof deleteTask == 'object'){
        for(var i = 0; i < deleteTask.length ; i++){
            Todo.deleteOne({item: deleteTask[i]}, function(err){
                console.log(err);
            });
        }
    }
      res.redirect('/');
});



http.createServer(app).listen(port, function(){

});