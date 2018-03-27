const { User, Image, Comment } = require('../models')


const logic = {

    login(username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ username, password })

                return User.findOne({ username, password }, { _id: 1, username: 1 })
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
                return User.findOne({ username }, { _id: 1, username: 1 })
            })
            .then(user => {
                if (user) throw Error(`This username already exists`)


                return User.create({ name, username, password })
            })

    },

    getToFollow(id) {
        return Promise.resolve()
            .then((users) => {
                validate(id)
                return User.findOne({ _id: id }, { following: 1, _id: 0 })
                    .then(following => {

                        return User.find({ $and: [{ _id: { $nin: following.following } }, { _id: { $ne: id } }] })

                    })

            })



    },

    getUser(id) {
        return Promise.resolve()
            .then(() => {
                validate(id)

                return User.findOne({ _id: id })
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

    },

    updateImage(id, image) {

        return Promise.resolve()
            .then(() => {
                validate({ id, image })
                return User.update({ _id: id }, { $push: { images: { url: image, user: id } } })

            })

    },

    getImage(id, imageId) {

        return Promise.resolve()
            .then(() => {
                validate(id, imageId)

                return User.findOne({ _id: id })
            })
            .then((user) => {
                if (!user.images.id) throw Error('Invalid Id')

                return user.images.id(imageId)
            })


    },

    commentImage(ownerId, imageId, comment, id) {
        return Promise.resolve()
            .then(() => {
                validate({ ownerId, imageId, comment, id })

                return User.findOne({ _id: ownerId })
            })
            .then(user => {
                return User.findOne({ _id: id })
                    .then(commentator => {
                        const image = user.images.id(imageId)

                        const _comment = new Comment({
                            text: comment,
                            user: commentator._id
                        })

                        image.comments.push(_comment)

                        return user.save()
                    })
            })

    },

    setLikes(ownerId, imageId, id) {
        return Promise.resolve()
            .then(() => {
                validate({ ownerId, imageId, id })

                return User.findOne({ _id: ownerId })
            })
            .then(user => {
                return User.findOne({ _id: id })
                    .then(liker => {
                        const image = user.images.id(imageId)
                        
                        
                        image.likes.push(id)
                        
                        return user.save()
                    })
            })

    },

    // remove(id, username, password) {
    //     return Promise.resolve()
    //         .then(() => {
    //             validate({ id, username, password })

    //             return User.findOne({ _id: id })
    //         })
    //         .then(user => {

    //             if (!user) throw Error('Username does not exist')

    //             if (user._id.toString() !== id.toString()) throw Error('user id does not match the one provided')

    //             if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

    //             return user.remove()


    //         })
    // }

}


function validate(data) {

    if (typeof (data) === 'undefined')
        throw Error(`${data} Can't be undefined or null`)
    return data
}


module.exports = logic