const User = require('../models/User');

module.exports = {
	list(){
		return User.find({});
	}
};