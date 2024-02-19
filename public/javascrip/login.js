function logar() {
    var nome = document.getElementById('nomes').value;
    var senha = document.getElementById('senha').value;

    fetch("/login", {
        method: 'POST',
        body: JSON.stringify({
            nomes: nome,
            senha: senha
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(async (resp) => {
        var status = await resp.text();
        if (status === 'conectado') {
            // Armazena o nome do usuário no localStorage
            localStorage.setItem('nomeUsuario', nome);
            // Redireciona para a página1.html
            window.location.href = './snakegame/html/pagina1.html?username=${nome}';
        } else {
            alert('Nome ou senha inválidos!');
        }
    })
    .catch(error => console.error('Erro:', error));
}