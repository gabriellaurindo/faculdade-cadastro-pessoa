//Importando Módulos
const Pessoa = require("../models/Pessoa")

//Função de login
async function consulta_pessoa (req,res){
    await Pessoa.find().then(listagem =>{
        res.send(listagem)
    }) 
} 

//Exportando Módulo
module.exports = consulta_pessoa