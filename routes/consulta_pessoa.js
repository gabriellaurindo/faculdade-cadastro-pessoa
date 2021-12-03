//Importando Módulos
const express = require('express')
const router = express.Router()
const consulta_pessoa = require('../api/controllers/consulta_pessoa')

//Rota de Pesquisa Geral
router.get('/consulta-pessoa', async (req, res) => {
    await consulta_pessoa(req,res)
})
   
//Exportando Rota Raiz
module.exports = router