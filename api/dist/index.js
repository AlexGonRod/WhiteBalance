'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var rp = require('request-promise');

// const protocol = 'http'
// const host = 'localhost'
// const port = 5000

var api = {
    _call: function _call(method, path, body, token) {
        var options = {
            method: method,
            uri: this.protocol + '://' + this.host + '/users/' + path,
            body: body,
            json: true
        };

        if (token) options.headers = { authorization: 'Bearer ' + token };

        return rp(options);
    },
    login: function login(username, password) {
        return this._call('post', 'login', { username: username, password: password });
    },
    create: function create(name, username, password) {
        return this._call('post', 'create', { name: name, username: username, password: password });
    },
    listToFollow: function listToFollow(token) {
        return this._call('get', 'tofollow', undefined, token);
    },
    listUser: function listUser(token) {
        return this._call('get', 'user', undefined, token);
    },
    listFollowing: function listFollowing(token) {
        return this._call('get', 'following', undefined, token);
    },
    update: function update(name, username, password, newName, newUsername, newPassword, token) {
        return this._call('post', 'update', { name: name, username: username, password: password, newName: newName, newUsername: newUsername, newPassword: newPassword }, token);
    },
    getImage: function getImage(imageId, ownerId, token) {
        return this._call('get', 'image/' + imageId + '/' + ownerId, undefined, token);
    },
    updateImage: function updateImage(image, token) {
        return this._call('put', 'updateImage', { image: image }, token);
    },
    deleteImage: function deleteImage(imageId, token) {
        return this._call('put', 'image/:' + imageId + '/deleteImage', token);
    },
    commentImage: function commentImage(ownerId, imageId, comment, token) {
        return this._call('put', ownerId + '/image/' + imageId + '/comment', { comment: comment }, token);
    },
    likeImage: function likeImage(ownerId, imageId, token) {
        return this._call('put', ownerId + '/image/' + imageId + '/likes', undefined, token);
    },
    follow: function follow(ownerId, token) {
        return this._call('put', ownerId + '/follow', undefined, token);
    },
    delete: function _delete(username, password, token) {
        return this._call('post', 'delete', undefined, token);
    }
};

exports.default = api;
