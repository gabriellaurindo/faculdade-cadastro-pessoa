//Importando Módulos
const Pessoa = require("../models/Pessoa")

//Função de login
function  cadastro_pessoa (req,res){
    Pessoa.create({nome, idade}).catch((err)=>{
        console.log("Houve um erro: " + err);
        res.statusCode = 401
        res.send({Error:err})
        break
    });
        res.statusCode = 201
        res.send({Descricao:"Registro criado com sucesso!"})  
}

//Exportando Módulo
module.exports = cadastro_pessoa