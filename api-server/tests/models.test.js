const mongoose = require('mongoose')
const assert = require('assert')
const { User, Image } = require('../src/models')


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

    describe('create user with images and followings', () => {
        let user, image, image2, following, following2

        before(() => {
            user = new User({
                name: 'name',
                username: 'username',
                password: 'password'
            })

            following = new User({
                name: 'name',
                username: 'username-follower',
                password: 'password'
            })

            following2 = new User({
                name: 'name',
                username: 'username-follower2',
                password: 'password'
            })

            return Promise.all([
                user.save().then(_user => user = _user),
                following.save().then(_follower => following = _follower),
                following2.save().then(_follower2 => following2 = _follower2)
            ])
                .then(() => {
                    image = new Image({
                        url: 'http://images.com/123123'
                    })

                    image2 = new Image({
                        url: 'http://images.com/4567456'
                    })

                    user.images = []

                    user.images.push(image)
                    user.images.push(image2)

                    return user.save()
                })
                .then(user => {
                    user.following = []

                    user.following.push(following._id)
                    user.following.push(following2._id)

                    return user.save()
                })
                .then(user => {
                    const id = user._id.toString()

                    return User.findOne({ _id: id })
                })
                .then(_user => user = _user)
        })

        it('should create user with images and followings', () => {
            assert(user, 'should user be created')

            assert(image, 'should image be created')

            assert(image2, 'should image2 be created')

            assert(following, 'should following be created')

            assert(following2, 'should following2 be created')

            assert(user.images, 'should user have images')

            assert(user.following, 'should user have following')

            assert.equal(user.images.length, 2, 'should user have 2 images')

            const [_image, _image2] = user.images

            assert.equal(_image._id.toString(), image._id.toString(), 'should image match')

            assert.equal(_image.url, image.url, 'should image url match')

            assert.equal(_image2._id.toString(), image2._id.toString(), 'should image2 match')

            assert.equal(_image2.url, image2.url, 'should image2 match')

            const [following_id, following_id2] = user.following

            assert.equal(following_id.toString(), following._id.toString(), 'should following match')

            assert.equal(following_id2.toString(), following2._id.toString(), 'should following2 match')
        })
    })

    after(done => {
        return mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})