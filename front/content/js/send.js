function send(){
    const nome = document.getElementById("inputNome").value
    const idade = document.getElementById("inputIdade").value
    const result = fetch('https://faculdade-cadastro-pessoa.herokuapp.com',{
        headers:{
            "Content-Type": "application/json"
        },
        method:"POST",
        body: JSON.stringify({nome,idade}),
    });
    window.alert("Registrado com sucesso!");
    document.getElementById("inputNome").value = "";
    document.getElementById("inputIdade").value = "";
    document.getElementById("gridCheck").checked=false;
}