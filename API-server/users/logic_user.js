const dataUser = require('./data_user')

const logicUser = {

    getUserFollowing(idUser) {
        validate(idUser)
        
        const user = dataUser.getUserById(idUser)
        
        if(!user) throw Error(`El usuario con id ${idUser} no existe`)

        const followers = dataUser.getUserFollowing(idUser).select('following').then((res)=>{
            return res
        })
        
        if (!followers) throw Error(`El usuario con id ${idUser} no tiene seguidores`)

        return followers

    },

    getUser(idUser) {
        validate(idUser)
      // if (!idUser) throw Error(`This ${idUser} doesn't exist`)

      return dataUser.getUserById(idUser)
       

    }
}





function validate(data) {
    
    if (typeof (data) === 'undefined')
        throw Error(`${data} Can't be undefined or null`)
    return data
}


module.exports = logicUser