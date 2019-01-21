//Aqui importo todos mis modulos necesarios
//Este demo esta desarrollado con sintaxis ecmascript 6 usando un traspilador babel 
import express from 'express'
import consign from 'consign'
import dotenv from 'dotenv'

//Aqui uso el modulo dotenv para ocultar y manejar mis variables de entorno con procces.env
const result = dotenv.config()

const app = express()

//Aqui uso el modulo consign para manejar mis rutas de configuracion y middleware  del servidor ordenanamente
consign({
    cwd: __dirname
})
    .include('libs/middlewares.js')
    .then('db.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app)


