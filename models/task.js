const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description:{type:Boolean, required:false},
    completed: {type:Boolean, default:false},
    name: String
})

const task = mongoose.model("task",taskSchema )
module.exports = task