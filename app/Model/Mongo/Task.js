'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

let taskSchema = mongoose.Schema({
    name: String,
    checked: Boolean
});

module.exports = mongoose.model('Task', taskSchema)
