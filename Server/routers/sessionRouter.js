const express = require('express')
const { createUser, verifyExistUser, getUser } = require('../dao/controllers/userController')
const sessionRouter = express.Router()

sessionRouter.post('/register', async (req, res) => {
    const {nombre, email, contrasena} = req.body
    if(await verifyExistUser(nombre)){
        res.redirect('/register', {error: 'El nombre de usuario ya esta siendo utilizado'})
    }else{
        const newUser = await createUser({nombre, email, contrasena})
        if(newUser){
           res.status(200).json({ok: true, content: 'usuario creado con exito'}).redirect('/login')
        }
    }
})

sessionRouter.post('/login', async (req, res) => {
    const {nombre, contrasena} = req.body
    if(await verifyExistUser(nombre)){
        if(await getUser(nombre, contrasena)){
            res.redirect('/')
        }else{
            res.redirect('/login', {error: 'Contraseña incorrecta'})
        }
    }else{
        res.status(404).redirect('/login', {error: 'El nombre de usuario no existe'})
    }
})

module.exports = sessionRouter