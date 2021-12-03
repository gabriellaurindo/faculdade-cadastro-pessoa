//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const pessoaSchema = new Schema({
    nome:{
       type: String,
       require:true
    },
    idade:{
        type: Number,
        require:true
    }
})

//Definindo modelo de pessoa baseado no Schema
const Pessoa = mongoose.model("Pessoa", pessoaSchema)

//Exportando Módulo
module.exports = Pessoa


