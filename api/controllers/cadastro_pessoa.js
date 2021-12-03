//Importando Módulos
const Pessoa = require("../models/Pessoa")

//Função de login
async function  cadastro_pessoa (req,res){
    const {nome,idade} = req.body
    await Pessoa.create({nome, idade}).catch((err)=>{
        console.log("Houve um erro: " + err);
        res.statusCode = 401
        res.send({Error:err})
        return
    });
        res.statusCode = 201
        res.send({Descricao:"Registro criado com sucesso!"})  
}

//Exportando Módulo
module.exports = cadastro_pessoa