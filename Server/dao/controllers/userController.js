const User = require("../models/userModel")
const bcrypt = require('bcrypt')


const createUser = async (user) => {

    try{
        const hashedPassword = await bcrypt.hash(user.contrasena, 10)
        user.contrasena = hashedPassword
    
        user.role = 'user'
        
        const newUser = new User(user)
        const userSaved = await newUser.save()
        
        console.log('Usuario creado con exito')
    
        return userSaved

    }catch(error){
        return {error: 'Error al crear el usuario'}
    }
            

}


const verifyExistUser = async (email) => {

    try{
        const findUser = await User.findOne({email})

        return findUser

    }catch(error){
        return {error: 'Email no valido'}
    }

}



module.exports = {createUser, verifyExistUser}