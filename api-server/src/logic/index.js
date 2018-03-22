const { User } = require('../models')


const logic = {

    login(username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ username, password })

                return User.findOne({ username, password },{_id: 0, username: 1})
            })
            .then(user => {
                if (!user) throw Error('username and/or password wrong')

                return user
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
        return new Promise((resolve, reject) => {
            validate(id)

            User.findOne({ _id: id })
                .then(resolve)
                .catch(reject)
        })


    },

    getUserFollowing(id) {
        return Promise.resolve()
            .then(() => {

                validate(id)

                return User.findOne({ _id: id }, { following: 1, _id: 0 })
                    .then(following => {
                        return User.find({ _id: { $in: following.following } })

                    })
                    .catch(err => err.message)

            })
    },

    update(id, name, username, password, newName, newUsername, newPassword) {

        return Promise.resolve()
            .then(() => {
                validate({ id, name, username, password, newName, newUsername, newPassword })

                return User.findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('username already exists')
                return User.findOne({ _id: id })
            })
            .then(user => {
                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return User.updateOne({ _id: id }, { name: newName, username: newUsername, password: newPassword })
            })
            .catch(err => err.message)
    },

    remove(id, username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ id, username, password })

                return User.findOne({ _id: id })
            })
            .then(user => {

                if (!user) throw Error('Username does not exist')

                if (user._id.toString() !== id.toString()) throw Error('user id does not match the one provided')

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