async function send(){
    try{
        const nome = document.getElementById("inputNome").value
        const idade = document.getElementById("inputIdade").value
        const result = await fetch('http://localhost:8080/cadastro-pessoa',{
            headers:{
                "Content-Type": "application/json"
            },
            method:"POST",
            body: JSON.stringify({nome,idade}),
        });
        const json = await result.json()
        window.alert("Registrado com sucesso!")
     }catch(err){
         console.log(err)
     }
}