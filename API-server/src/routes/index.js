const {Router} = require('express')
const { list } = require('./handlers')

const router = Router()

router.get('/users', list)
router.get('/user/:id', retrieve)

module.exports = router