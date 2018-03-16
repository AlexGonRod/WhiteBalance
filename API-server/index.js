require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./users/router_user')
const app = express()
const router = express.Router();

app.use(cors())

const {PORT} = process.env
// const mongo = {
//     port: process.env.MONGO_PORT,
//     host: process.env.MONGO_HOST,
//     db: process.env.MONGO_DB
// }

const {MONGO_PORT, MONGO_HOST, MONGO_DB} = process.env

app.use('/users', routes)

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`)
app.listen(port, () => console.log(`Listening on port ${port}`))


