const {Router} = require('express')
const { list } = require('./handlers')

const router = Router()

router.get('/users', list)

module.exports = router