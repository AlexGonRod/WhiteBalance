const rp = require('request-promise')


// const protocol = 'http'
// const host = 'localhost'
// const port = 5000

const api = {
    _call(method, path, body, token) {
        const options = {
            method,
            uri: `${this.protocol}://${this.host}/users/${path}`,
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

    listToFollow(token) {
        return this._call('get', 'tofollow', undefined, token)
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

    getImage(imageId, ownerId, token) {
        return this._call('get', `image/${imageId}/${ownerId}`, undefined, token )
    },

    updateImage(image, token) {
        return this._call('put', 'updateImage', {image}, token)
    }, 

    deleteImage(imageId, token){
        return this._call('put', `image/:${imageId}/deleteImage`, token)
    },

    commentImage(ownerId, imageId, comment, token){
        return this._call('put', `${ownerId}/image/${imageId}/comment`, {comment}, token)
    },

    likeImage(ownerId, imageId, token){
        return this._call('put', `${ownerId}/image/${imageId}/likes`,undefined, token)
    },

    follow(ownerId, token) {
        return this._call('put', `${ownerId}/follow`, undefined, token)
    },

    delete(username, password, token) {
        return this._call('post', 'delete',undefined,  token)
    }
}

export default api;