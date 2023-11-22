const User = require("../models/userModel");
const bcrypt = require('bcrypt')

const createUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.contrasena, 10)
    user.role = 'user'
    user.contrasena = hashedPassword
    const newUser = new User(user)
    return await newUser.save()
}

const verifyExistUser = async (name) => {

    await User.nombre.findOne({name})

}

const getUser = async (user, password) => {

    const hashedPassword = await User.contrasena.findOne(user)

    let isCorrect 

    await bcrypt.compare(password, hashedPassword, (err, result) => {
        if(err){
            console.log('Error al comparar las contaseñas')
            isCorrect = false
        }else if(result){
            isCorrect = true
        }else{
            isCorrect = false
        }
    })
    return isCorrect
}



module.exports = {createUser, getUser, verifyExistUser}