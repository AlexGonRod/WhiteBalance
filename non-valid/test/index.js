require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {
    true && it('should list', done => {
        api.list()
        .then(res => {
            assert.equal(res.status, 'OK')

            assert(res.data, 'should return data')

            done()
        })
        .catch(done)
    })

})

