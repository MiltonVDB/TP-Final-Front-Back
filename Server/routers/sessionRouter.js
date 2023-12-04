const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../dao/models/userModel')
const { createAccessToken } = require('../dao/libs/jws')
const { createUser, verifyExistUser} = require('../dao/controllers/userController')
const { userRequired } = require('../dao/controllers/tokenController')
const sessionRouter = express.Router()


sessionRouter.post('/register',async (req, res) => {
    try{
        const {nombre, email, contrasena} = req.body
        if(await verifyExistUser(email)){
            return res.status(400).json(["Este Email ya esta en uso"])
        }else{
            const userSaved = await createUser({nombre, email, contrasena})
            const token = await createAccessToken ({id: userSaved._id})
            res.cookie("token", token)
            res.json({
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
             })
        }
    }catch(error){
        res.status(500).json({ message: error.message })
    }
})


sessionRouter.post('/login', async (req, res) => {
    const { email, contrasena } = req.body
    try{
        const userFound = await verifyExistUser(email)
        if (!userFound){
            return res.status(400).json(["Usuario no encontrado"])
        }
        const isMatch = await bcrypt.compare(contrasena, userFound.contrasena)
        if (!isMatch){
            return res.status(400).json(["Contraseña incorrecta"])
        }
        const token = await createAccessToken ({id: userFound._id})
        res.cookie("token", token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    }catch(error){
        res.status(500).json({ message: error.message })
    }
})


sessionRouter.post('/logout', (req, res) => {
    try {
        res.cookie('token', '', {expires: new Date(0)})
        return res.sendStatus(200)  
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

sessionRouter.get('/verify' , userRequired, async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound){
        return res.status(401).json({message: 'Sin Autorizacion'})
    } 

    return res.json({
        id: userFound._id,
        username: userFound.nombre,
        email: userFound.email
    })
})

module.exports = sessionRouter