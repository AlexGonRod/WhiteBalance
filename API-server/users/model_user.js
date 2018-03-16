const mongoose = require('mongoose');

const User = mongoose.model('images', {
	id: Number,
	name: String,
	username: String,
	password: String,
	following: Array,
	images: [{
		id: String,
		image: String,
		comments: String,
		Likes: Number
	}]
});

module.exports= User;