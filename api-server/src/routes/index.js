
const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')

const routes = express.Router()
const jsonBodyParser = bodyParser.json()


routes.get('/:idUser/following', (req, res) => {

    const { params: { idUser } } = req

    logic.getUserFollowing(idUser)
        .then((data) => {
            return res.json(data)
        })
        .catch(() => console.log('error listing following'))

})

routes.get('/:idUser', (req, res) => {
    const { params: { idUser } } = req

    logic.getUser(idUser)
        .then((data) => {
            return res.json(data)
        })
        .catch(() => console.log('Erron on list'))
})

routes.post('/create', jsonBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    logic.register(name, username, password)
        .then((res) => {
            return res.json(res)
        })
})

routes.put('/:idUser/update', jsonBodyParser, (req, res) => {
    const { body: { name, username, password, newName, newUsername, newPassword } } = req
    const { params: { idUser } } = req

    logic.update(idUser, name, username, password, newName, newUsername, newPassword)
        .then((data) => {
            return res.json(data)
        })
        .catch(err => {
           return res.json(err.message)})
})

routes.delete('/:idUser/delete', jsonBodyParser, (req, res) => {
    //const {body:{ username, password } } =req
    const { params: { idUser} } = req

    logic.remove(idUser)
    console.log(idUser)
        .then(() => {
            return res.json('OK')
        })
        .catch(err => {
            res.json(err.message)})
})





    module.exports = routes