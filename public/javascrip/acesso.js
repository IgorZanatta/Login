
function cadastrar() {
    var nomescad = document.getElementById('nomescad').value;
    var senhacad = document.getElementById('senhacad').value;

    console.log(JSON.stringify({
        nomescad: nomescad,
        senhacad: senhacad
    }));

    fetch("/cadastro", {
        method: 'POST',
        body: JSON.stringify({
            nomescad: nomescad,
            senhacad: senhacad
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(async (resp) => {
        if (resp.ok) {
            console.log('Cadastro realizado com sucesso');
        } else {
            console.error('Falha ao cadastrar');
        }
    })
    .catch(error => console.error('Erro:', error));
}