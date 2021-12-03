//Importando módulos
const app = require("./app")

//Porta dinamica
const port = process.env.PORT || 3000

//Subir Servidor
app.listen(port)