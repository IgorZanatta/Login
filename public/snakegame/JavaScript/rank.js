document.addEventListener('DOMContentLoaded', function () {
    // Função para preencher a tabela de classificação
    function fillRankTable(users) {
        const rankTable = document.getElementById('rank-table');
        
        // Limpa a tabela antes de preenchê-la novamente
        rankTable.innerHTML = '';

        // Adiciona cabeçalho da tabela
        const headerRow = rankTable.insertRow(0);
        const headers = ['Posição', 'Nome', 'Pontuação'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Adiciona linhas com dados dos usuários
        users.forEach((user, index) => {
            const row = rankTable.insertRow(index + 1); // +1 para compensar o cabeçalho

            const positionCell = row.insertCell(0);
            positionCell.textContent = index + 1; // Ajusta a posição

            const nameCell = row.insertCell(1);
            nameCell.textContent = user.nome; // Supondo que o nome esteja disponível

            const pointsCell = row.insertCell(2);
            pointsCell.textContent = user.point; // Supondo que a pontuação esteja disponível
        });
    }

    // Função para obter dados do servidor e preencher a tabela
    function fetchRankData() {
        // Substitua pela lógica de chamada ao servidor para obter dados do ranking
        fetch('http://localhost:3000/getRankData')
            .then(response => response.json())
            .then(data => {
                // Verifique se 'data' contém os dados necessários (talvez um array de usuários)
                if (Array.isArray(data)) {
                    fillRankTable(data);
                }
            })
            .catch(error => {
                console.error('Erro ao obter dados do ranking:', error);
            });
    }

    // Chama a função para buscar dados do servidor e preencher a tabela ao carregar a página
    fetchRankData();
});