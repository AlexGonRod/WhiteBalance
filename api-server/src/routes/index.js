const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { success, fail } = require('./handlers/api-utils')

const routes = express.Router()
const jsonBodyParser = bodyParser.json()


const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env
const expiresIn = parseInt(expiration)


function jwtValidate(req, res, next) {
    const auth = req.get('authorization')

    try {
        const token = auth.split(' ')[1]

        jwt.verify(token, secret)

        req.tokencito = jwt.verify(token, secret)

        next()

    } catch (err) {
        res.json(fail("Invalid Token"))

    }
}


routes.post('/login', jsonBodyParser, (req, res) => {
    const { body: { username, password } } = req

    logic.login(username, password)
        .then(user => {

            const token = jwt.sign({ id: user._id }, secret, { expiresIn })
            return res.json(success({ token }))
        })
        .catch(err => res.json(fail(err.message)))
})

routes.post('/create', jsonBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    logic.register(name, username, password)
        .then((data) => {

            return res.json(success(data))
        })
        .catch(err => res.json(fail(err.message)))
})

routes.get('/following', jwtValidate, (req, res) => {

    const { id } = req.tokencito

    logic.getUserFollowing(id)
        .then(following => {
            res.json(success(following))
        })
        .catch(err => res.json(fail(err.message)))

})

routes.get('/user', jwtValidate, (req, res) => {

    const { id } = req.tokencito

    logic.getUser(id)
        .then(user => {
            res.json(success(user))
        })
        .catch(err => res.json(fail(err.message)))
})


routes.put('/update', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { name, username, password, newName, newUsername, newPassword } } = req

    const { id } = req.tokencito

    logic.update(id, name, username, password, newName, newUsername, newPassword)
        .then(() => {
            return res.json(success())
        })
        .catch(err => res.json(fail(err.message)))
})

routes.put('/updateImage', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { image } } = req

    const { id } = req.tokencito

    logic.updateImage(id, image)
        .then(() => {
            return res.json(success())
        })
        .catch(err => res.json(fail(err.message)))
})

routes.get('/image/:imageId', [jwtValidate, jsonBodyParser], (req, res) => {
    const { params: { imageId } } = req

    const { id } = req.tokencito

    logic.getImage(id, imageId)
        .then(image => {
            res.json(success(image))
        })
        .catch(err => res.json(fail(err.message)))
})

routes.put('/comments', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { comments } } = req
    const { id } = req.tokencito

    logic.comments(id, comments)
        .then(() => {
            return res.json(success())
        })
        .catch(err => res.json(fail(err.message)))
})


routes.delete('/delete', [jwtValidate, jsonBodyParser], (req, res) => {

    // const { params: { id } } = req
    const { body: { username, password } } = req
    const { id } = req.tokencito

    logic.remove(id, username, password)
        .then(() => {
            return res.json(success())
        })
        .catch(err => res.json(err.message))
})


module.exports = routes