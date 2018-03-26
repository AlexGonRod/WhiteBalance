const { Schema, Schema: { ObjectId } } = require('mongoose')
const User = require('./User')

module.exports = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
})