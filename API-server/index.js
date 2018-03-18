require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./src/routes')
const app = express()
const router = express.Router();

app.use(cors())

const {PORT} = process.env


const {MONGO_PORT, MONGO_HOST, MONGO_DB} = process.env

app.use('/users', routes)

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


