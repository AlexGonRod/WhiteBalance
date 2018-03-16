const User = require('./model_user')

const dataUser = {
    getUserById(idUser) {
        return User.findOne({ _id: idUser })
    },
    getUserFollowing(idUser) {
        return User.findOne({ _id: idUser })
    }

}

module.exports = dataUser