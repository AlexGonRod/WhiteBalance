const { Schema, Schema: { ObjectId } }= require('mongoose')
const Comment = require('./Comment')

module.exports = new Schema({
    url: {
        type: String,
        required: true
    },
    comments: [Comment],
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    likes: []

})