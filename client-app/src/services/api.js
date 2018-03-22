const rp = require('request-promise')

const protocol = 'http'
const host = 'localhost'
const port = 5000

const api = {

    _call(method, path, body) {
        const options = {
            method,
            uri: `${protocol}://${host}:${port}/users/${path}`,
            body,
            json: true,
        }
        
        if (this.getToken()) options.headers = { authorization: `Bearer ${this.getToken()}` }

        return rp(options)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
            .then(data => {
                this.setToken(data)

                return data
            })
    },

    create(name, username, password) {
        return this._call('post', 'create', { name, username, password })
    },


    listUser() {
        return this._call('get', this.getToken(), undefined)
    },

    listFollowing(id) {
        return this._call('get', `${this.getToken()}/following`, undefined)
    },

    update(id, name, username, password, newName, newUsername, newPassword) {
        return this._call('post', `${this.getToken()}/update`, { name, username, password, newName, newUsername, newPassword })
    },

    delete(id, username, password) {
        return this._call('post', `${this.getToken()}/delete`)
    },

    setToken(token) {
        localStorage.setItem("token", token)
    },

    getToken() {
        return localStorage["token"]
    }



}

export default api;
