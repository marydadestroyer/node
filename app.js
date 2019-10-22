// call express
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser");
var express = require("express");  //saying we require it
var app = express();   //this variable is going to call express

//
var mongoose = require('mongoose');
//

var port = process.env.PORT || 3000;   //andre  for maintainablility
var complete;






app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));

//added 10 22
app.use(bodyParser.json());
//added 10 22

app.use(bodyParser.urlencoded({ encoded: true}));

//
const Todo =require('./models/todo.model/)');
const mongoDB = 'mongodb+srv://hooman:margretTHATCHERiscool@cluster0-rhcqr.mongodb.net/test?retryWrites=true&w=majority';
//connection string to db pasted from clusetr sandbox


mongooose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));

//10 22
//removed item in array list
var task = [];

// single slash is home page
app.get('/', function(req, res){
    Todo.find(function(err, todo){
        if(err){
            console.log(err);

        }else{
            task =[];
            for(i = 0; i< todo,length; i ++){
                //adding items to appropriate db
                task.push(todo[i].item);

            }
        }
    })
res.render('index', {task:task});

});

app.post('/addtask',function(req, res){
    //10 22
    let newTodo = new Todo({
        item: req.body.newtask,

        fin: false
    });

    newTodo.save(function(err){
        if(err){
            console.log(err),


        }
        res.redirect('/');

    };
    //10 22
   // var newTask = req.body.newtask;
    //task.push(newTask);


    //res.redirect('/');
});

app.post('/removetask',function(req, res){
    var completeTask = req.body.check;
    //task.push(newTask);
    if(){(typeOf completeTask ==='string')
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask),1);

    }elseIf{(typeOf completeTask === "object")
        for()var i = 0; i < completeTask.length; i++){
          complete.push(completeTask[i]);
        task.splice(task.indexOf(completeTask[i]),1);
        }

    }
    res.redirect('/');
});

http.createServer(app).listen(port, function(){

});