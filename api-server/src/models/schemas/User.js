const { Schema, Schema: { ObjectId } } = require('mongoose')
const Image = require('./Image')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    following: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    images: [Image]
})