'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

let commentSchema = mongoose.Schema({
    text: String
});

module.exports = mongoose.model('Comment', commentSchema)
