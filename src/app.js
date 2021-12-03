//Env config
const {resolve} = require ('path')
require('dotenv').config({path: resolve(__dirname, '../config/vars/.env')})

//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Config body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Config cors
app.use(cors());


//Importar Rotas
const index =   require('../routes/index')
const consulta_pessoa =   require('../routes/consulta_pessoa')

//Usar Rotas
app.use('/',index)
app.use('/',consulta_pessoa)

//Importando Banco
require("../config/database")



module.exports = app