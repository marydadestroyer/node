const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    item: {type: String, required: true, max: 100},
    done: {type: Boolean, required: true}
});



//item, like item on to do list
//done, when item is completed 


module.exports = mongoose.model('Todo',TodoSchema);