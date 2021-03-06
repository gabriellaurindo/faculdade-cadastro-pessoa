//Importando Módulos
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const cadastro_pessoa = require("../api/controllers/cadastro_pessoa")

//Rota Raiz
router.get('/', (req, res,) => {
   res.send({Descrição:'API REST Privada!', Version: '1.0.0'})
})

router.post('/', async (req, res,) => {
   await cadastro_pessoa(req,res)
})

   
//Exportando Rota Raiz
module.exports = router