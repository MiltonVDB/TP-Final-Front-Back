
const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

const productRouter = require('./routers/productRouter')

const sessionRouter = require('./routers/sessionRouter')



dotenv.config()

const mongoose = require('./config/dbConfig')

const app = express()

const PORT = process.env.PORT || 8080



app.use(cors())

app.use(express.static(path.join(__dirname + '/public')))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

const session_params = {
    secret: 'keySecret',
    resave: false,
    saveUnitialized: true,
    cookie: {secure: false}
}
app.use(session(session_params))



app.use('/api/products', productRouter)

app.use('/api/session', sessionRouter)


app.listen(PORT, () => {
    console.log('El servidor se esta escuchando en: http://localhost:' + PORT + '/')
})