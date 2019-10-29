const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    item: {type: String, required: true, max: 100},
    fin: {type: Boolean, required: true}
});



//item, like item on to do list
//fin, when item is completed 


module.exports = mongoose.model('Todo',TodoSchema);