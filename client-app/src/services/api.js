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
        
        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },

    create(name, username, password) {
        return this._call('post', 'create', { name, username, password })
    },

    listUsers(token) {
        return this._call('get', 'list', undefined, token)
    },


    listUser(token) {
        return this._call('get', 'user', undefined, token)
    },

    listFollowing(token) {
        return this._call('get', 'following', undefined, token)
    },

    update( name, username, password, newName, newUsername, newPassword, token) {
        return this._call('post', 'update', { name, username, password, newName, newUsername, newPassword }, token)
    },

    getImage(imageId, token) {
        return this._call('get', `image/${imageId}`, undefined, token )
    },

    updateImage(image, token) {
        return this._call('put', 'updateImage', {image}, token)
    }, 

    comment(imageId, comments, token){
        return this._call('put', `image/${imageId}/comments`, {comments}, token)
    },

    delete(username, password, token) {
        return this._call('post', 'delete',undefined,  token)
    }
}

export default api;