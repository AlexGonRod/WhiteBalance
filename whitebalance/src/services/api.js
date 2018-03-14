const rp = require('request-promise')

const protocol = 'http'
const host = 'localhost'
const port = 5000



const api = {

    _baseUrl() {
        
            return `${protocol}://${host}:${port}/api`
        
    },

    
    _call(method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users')
    }
    
}



export default api;
