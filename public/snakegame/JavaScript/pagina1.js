document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome do usuário do localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');

    if (nomeUsuario) {
        // Exibe o nome do usuário na página
        document.getElementById('nomeUsuarioDisplay').textContent = `Comece a Codar, ${nomeUsuario}`;

        // Obtém e exibe a pontuação do usuário
        obterPontuacaoUsuarioAtual(nomeUsuario);
    } else {
        // Se o nome do usuário não estiver disponível, redireciona para a página de login
        window.location.href = '../index.html';
    }
});

function obterNomeUsuarioDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}

function obterPontuacaoUsuarioAtual(nomeUsuario) {
    const url = `/getPoints/${nomeUsuario}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pontuacao = data.points || 'N/A';
            document.getElementById('pontuacao').textContent = pontuacao;
        })
        .catch(error => {
            console.error('Erro ao obter pontuação do usuário:', error.message);
        });
}

// Adicione a função para obter parâmetros da URL
function obterParametroDaURL(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

document.addEventListener('DOMContentLoaded', () => {
    const nivel = obterParametroDaURL('level');
    
    // Verifica se a página atual é a 'quest.html' antes de adicionar a questão
    if (window.location.pathname.includes('quest.html')) {
        const questaoElemento = document.getElementById('questaoElemento');
        questaoElemento.textContent = `Questão ${nivel}`;
    }
});