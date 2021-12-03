//Importando módulos
const mongoose = require("mongoose")

//Config url mongo env
const URL = process.env.MONGO_DB_URL;

//Config banco mongoose
mongoose.Promise = global.Promise;
mongoose.connect(URL, {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Conectado...");
}).catch((err)=>{
    console.log("Houve um erro: " + err);
});

