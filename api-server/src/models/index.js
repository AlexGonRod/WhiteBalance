const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

const Image = new Schema({
	url: {
		type: String,
		required: true
	},
	comments: [String],
	Likes: Number
})

const User = new Schema({
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

module.exports = {
	User: mongoose.model('User', User),
	Image: mongoose.model('Image', Image)
}