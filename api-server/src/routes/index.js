const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const routes = express.Router()
const jsonBodyParser = bodyParser.json()


const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env
const expiresIn = parseInt(expiration)


function jwtValidate(req, res, next) {
    const auth = req.get('authorization')

    try {
        const token = auth.split(' ')[1]

        jwt.verify(token, secret)

        next()

    } catch (err) {
        res.json(err.message)

    }
}


routes.post('/login', jsonBodyParser, (req, res) => {
    const { body: { username, password } } = req

    logic.login(username, password)
        .then(user => {

            const token = jwt.sign({ id: user._id }, secret, { expiresIn })
            return res.json({ token })
        })
        .catch(err => res.json(err.message))
})

routes.post('/create', jsonBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    logic.register(name, username, password)
        .then((data) => {

            return res.json(data)
        })
        .catch(err => res.json(err.message))
})

routes.get('/:token/following', jwtValidate, (req, res) => {

    const { params: { token } } = req
    const { id } = jwt.verify(token, secret)

    logic.getUserFollowing(id)
        .then((data) => {
            res.json(data)
        })
        .catch(err => res.json(err.message))

})

routes.get('/:token', jwtValidate, (req, res) => {
    const { params: { token } } = req
    const { id } = jwt.verify(token, secret)

    logic.getUser(id)
        .then((data) => {
            res.json(data)
        })
        .catch(err => res.json(err.message))
})


routes.put('/:token/update', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { name, username, password, newName, newUsername, newPassword } } = req
    const { params: { token } } = req
    const { id } = jwt.verify(token, secret)

    logic.update(id, name, username, password, newName, newUsername, newPassword)
        .then((data) => {
            return res.json(data)
        })
        .catch(err => res.json(err.message))
})


routes.delete('/:token/delete', [jwtValidate, jsonBodyParser], (req, res) => {

    const { params: { token } } = req
    const { body: { username, password } } = req
    const { id } = jwt.verify(token, secret)

    logic.remove(id, username, password)
        .then(() => {
            return res.json()
        })
        .catch(err => res.json(err.message))
})


module.exports = routes