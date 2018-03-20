const rp = require('request-promise')

const protocol = 'http'
const host = 'localhost'
const port = 5000



const api = {

    _call(method, path, body, token) {
        const options = {
            method,
            uri: `${protocol}://${host}:${port}/users/${path}`,
            body,
            json: true,
        }

        if (body) options.body = body

        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username, password) {
        return this._call('post', '/login', { username, password })
    },

    create(name, username, password) {
        return this._call('post', '/create', { name, username, password })
    },


    listUser(id, token) {
        return this._call('get', id, undefined, token)
    },

    listFollowing(id, token) {
        return this._call('get', `${id}/following`, undefined, token)
    },

    update(token, id, name, username, password, newName, newUsername, newPassword) {
        return this._call('post', `${id}/update`)
    },

    delete(id, username, password) {
        return this._call('post', `${id}/delete`)
    }


}

export default api;
