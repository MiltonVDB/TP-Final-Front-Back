const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'TP_Final_Fron_Back_UTN_Noche', {useNewUrlParser: true,})
.then(() => {
    console.log('conexion exitosa')
})
.catch((err) => {
    console.error(err)
})

module.exports = mongoose