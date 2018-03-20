const { User } = require('../models')


const logic = {

    login(username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ username, password })

                return User.findOne({ username, password })
            })
            
            .then(user => {
                if (!user) throw Error('username and/or password wrong')

                return true
            })
    },

    register(name, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ name, username, password })
                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error(`This username already exists`)

                return User.create({ name, username, password })
            })

    },

    getUser(id) {
        validate(id)

        return User.findOne({ id: id })

    },

    getUserFollowing(id) {
        validate(id)

        return User.findOne({ id: id }, { following: 1, id: 0 })
            .then(following => {
                return User.find({ id: { $in: following.following } })

            })
            .catch(err => err.message)
    },

    update(id, name, username, password, newName, newUsername, newPassword) {

        return Promise.resolve()
            .then(() => {
                validate({ id, name, username, password, newName, newUsername, newPassword })
                console.log(name)
                return User.findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('username already exists')
                return User.findOne({ id: id })
            })
            .then(user => {
                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return User.updateOne({ id }, { name: newName, username: newUsername, password: newPassword })
            })
            .catch(err => err.message)
    },

    remove(id, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ _id, username, password })

                return User.findOne({ _id: _id })
            })
            .then(user => {

                if (!user) throw Error('Username does not exist')

                if (user._id.toString() !== _id.toString()) throw Error('user id does not match the one provided')

                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return user.remove()


            })
    }

}


function validate(data) {

    if (typeof (data) === 'undefined')
        throw Error(`${data} Can't be undefined or null`)
    return data
}


module.exports = logic
