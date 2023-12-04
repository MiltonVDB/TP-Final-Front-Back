const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const TOKEN_SECRET = process.env.TOKEN_SECRET

const userRequired = (req, res, next) => {
    const {token} = req.cookies
    if (!token){
        return res.status(401).json({message: 'Token invalido - Autorizacion denegada'})
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Token invalido - Autorizacion denegada'})
        }
        req.user = user
        next()
    })
}

module.exports = {userRequired}