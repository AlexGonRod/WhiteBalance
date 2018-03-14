require('dotenv').config()

const api = require('../src')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

api.list()
    .then(res => res.data)
    .catch(console.error)