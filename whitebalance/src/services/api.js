const rp = require('request-promise')

const protocol = 'http'
const host = 'localhost'
const port = 5000



const api = {

    // _baseUrl() {
    //     with(this) {
    //         return 

    //     }
    // },

    _call(method, path, body) {
        return rp({
            method,
            uri: `${protocol}://${host}:${port}/${path}`,
            body,
            json: true,
            
        })
    },

    listUser(idUser) {
        return this._call('get', `users/${idUser}`)
    },

    listFollowing(idUser) {
        return this._call('get', `/${idUser}/following`)
    },
}



export default api;
