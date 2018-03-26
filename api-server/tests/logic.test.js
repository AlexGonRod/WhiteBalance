const mongoose = require('mongoose')
const assert = require('assert')
const { User, Image, Comment } = require('../src/models')
const logic = require('../src/logic')


describe('models', () => {
    before(() => {
        return mongoose.connect('mongodb://localhost/white-balance-models-test')
    })

    beforeEach(() => {
        return Promise.all([
            User.remove(),
            Image.remove()
        ])
    })

    describe('comment an image', () => {
        let user, image, user2

        before(() => {
            user = new User({
                name: 'name',
                username: 'username',
                password: 'password'
            })

            user2 = new User({
                name: 'name',
                username: 'username-follower',
                password: 'password'
            })

            return Promise.all([
                user.save().then(_user => user = _user),
                user2.save().then(_follower => user2 = _follower)
            ])
                .then(() => {
                    image = new Image({
                        url: 'http://images.com/123123'
                    })

                    user.images = []

                    user.images.push(image)

                    return user.save()
                })
                .then(user => {
                    const ownerId = user._id.toString()
                    const imageId = image._id.toString()
                    const comment = 'comment'
                    const commentatorId = user2._id.toString()

                    return logic.commentImage(ownerId, imageId, comment, commentatorId)
                })
                .then(user => {
                    const id = user._id.toString()

                    return User.findOne({ _id: id })
                })
                .then(_user => user = _user)
        })

        it('should create user with followings and images with comments', () => {
            assert(user, 'should user be created')

            assert(image, 'should image be created')

            assert(user2, 'should user 2 be created')

            assert(user.images, 'should user have images')

            assert.equal(user.images.length, 1, 'should user have 1 image')

            const [_image] = user.images

            assert.equal(_image._id.toString(), image._id.toString(), 'should image match')

            assert.equal(_image.url, image.url, 'should image url match')

            assert.equal(_image.comments.length, 1, 'should image have 1 comment')

            const [comment] = _image.comments

            assert.equal(comment.text, 'comment', 'should comment text match')

            assert.equal(comment.user.toString(), user2._id.toString(), 'should comment user match')
        })
    })

    after(done => {
        return mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})