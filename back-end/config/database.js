//Importando módulos
const mongoose = require("mongoose")

//Config banco mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://gabriel:@faculdade.kjvyt.mongodb.net/Prefeitura?retryWrites=true&w=majority', {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Conectado...");
}).catch((err)=>{
    console.log("Houve um erro: " + err);
});

