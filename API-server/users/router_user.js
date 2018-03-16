
const express = require('express')
const routesUser = express.Router()
const logicUser = require('./logic_user')

const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()


routesUser.get('/:idUser/following', (req, res) => {

    const { params: { idUser } } = req
    //console.log(idUser)
    logicUser.getUserFollowing(idUser)
    .then((data) => {

        return res.json(data)
    })

})

routesUser.get('/:idUser', (req, res) => {
    const { params: { idUser } } = req
    logicUser.getUser(idUser)
        .then((data) => {

            return res.json(data)
        })
})

module.exports = routesUser