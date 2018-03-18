const { User } = require('../models')
const ObjectId = require('mongodb').ObjectID;

const logic = {

    getUserFollowing(idUser) {
        validate(idUser)

        return User.findOne({ _id: idUser })
            .then(user => {
                // if (!user) throw Error(`El usuario con id ${idUser} no existe`)

                return User.findOne({ _id: idUser }).select('following')
                
            })
            return Promise.all([{following}])
                .then(files => {
                    files.forEach(file => {
                        process(file.json)
                    })
                })
                .catch(err => {

                })

                process()
    },


    getUser(idUser) {
        validate(idUser)

        return User.findOne({ _id: idUser })

    },

    register(name, username, password) {

        Promise.resolve()
            .then(() => {
                validate( {name, username, password })

                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error(`This username already exists`)

                return User.insert({ name, username, password })
            })
            .catch(() => {
                console.log('errorrrrrrrres')
            })

    },

    update(idUser, name, username, password, newName, newUsername, newPassword) {

        return Promise.all()
            .then(() => {
                validate({ idUser, name, username, password, newName, newUsername, newPassword })

                return User.findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('username already exists')
                return User.findOne({ idUser })
            })
            .then(user => {
                // if(user.username !== username || user.password !==)
                return User.updateOne({ idUser }, { $set: { name: newName, username: newUsername, password: newPassword } })
            })
    },

    remove(idUser){
        
        Promise.resolve()
        .then(() => {
            validate(idUser)
            
        return User.findOne({idUser})
        
        
        })
        .then(user => {
            
            if(!user) throw Error('Username does not exist')

            return User.remove({ _id: idUser})
            
        })
        .catch(() => console.log('erorrrrrrr'))
        
    }

}


function validate(data) {

    if (typeof (data) === 'undefined')
        throw Error(`${data} Can't be undefined or null`)
    return data
}


module.exports = logic
