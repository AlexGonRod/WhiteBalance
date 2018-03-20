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
            uri: `${protocol}://${host}:${port}/users/${path}`,
            body,
            json: true,
            
        })
    },

    login(username, password) {
        return this._call('post', '/login')
    },

    create() {
        return this._call('post', '/create')
    },


    listUser(idUser) {
        return this._call('get', `${idUser}`)
    },

    listFollowing(idUser) {
        return this._call('get', `${idUser}/following`)
    },

    update(_id) {
        return this._call('post', `${_id}/update`)
    },

    delete(_id) {
        return this._call('post', `${_id}/delete`)
    }


}



export default api;
