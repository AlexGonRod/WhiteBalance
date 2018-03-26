const mongoose = require('mongoose')
const { User, Image, Comment } = require('./schemas')

module.exports = {
	User: mongoose.model('User', User),
	Image: mongoose.model('Image', Image),
	Comment: mongoose.model('Comment', Comment)
}