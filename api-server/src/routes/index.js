
const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const routes = express.Router()
const jsonBodyParser = bodyParser.json()


const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env
const expiresIn = parseInt(expiration)


function jwtValidate(req, res, token) {
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
        .then(() => {
            const token = jwt.sign({ username }, secret, { expiresIn })

            return res.json({token})
        })
        .catch(err => res.json(err.message))
})

routes.post('/create', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { name, username, password } } = req

    logic.register(name, username, password)
        .then((data) => {

            return res.json(data)
        })
        .catch(err => res.json(err.message))
})

routes.get('/:_id/following', jwtValidate, (req, res) => {

    const { params: { _id } } = req

    logic.getUserFollowing(_id)
        .then((data) => {
            return res.json(data)
        })
        .catch(err => res.json(err.message))

})

routes.get('/:_id', jwtValidate, (req, res) => {
    const { params: { _id } } = req

    logic.getUser(_id)
        .then((data) => {
            return res.json(data)
        })
        .catch(err => res.json(err.message))
})


routes.put('/:_id/update', [jwtValidate, jsonBodyParser], (req, res) => {
    const { body: { name, username, password, newName, newUsername, newPassword } } = req
    const { params: { _id } } = req

    logic.update(_id, name, username, password, newName, newUsername, newPassword)
        .then((data) => {
            return res.json(data)
        })
        .catch(err => res.json(err.message))
})


routes.delete('/:_id/delete', [jwtValidate, jsonBodyParser], (req, res) => {
    //const {body:{ username, password } } =req
    const { params: { _id } } = req
    const { body: { username, password } } = req

    logic.remove(_id, username, password)
        .then(() => {
            return res.json()
        })
        .catch(err => res.json(err.message))
})

module.exports = routes