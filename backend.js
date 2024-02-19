const http = require('http');
const path = require('path');
const express = require('express');
const fs = require("fs");
const session = require('express-session');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Adicionado extended: true
app.use(session({ secret: "abc" }));
app.use(express.static(path.join(__dirname, 'public')));
 

// Configurações
app.set('port', process.env.PORT || 3000);

// Middleware de roteamento
app.use('/Login/*', (req, res, next) => {
    if (req.session.nome) {
        next();
    } else {
        res.redirect('./public/snakegame/index.html');
    }
});

app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
server.listen(app.get('port'), () => {
    console.log('Servidor na porta', app.get('port'));
});

// Rota de login
app.post('/login', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const nome = req.body.nomes;
        const senha = req.body.senha;

        for (const umUsuario of usuariosparse) {
            if (nome === umUsuario.nome && senha === umUsuario.senha) {
                req.session.nome = umUsuario;  // Corrigido
                res.send('conectado');
                return;
            }
        }
        res.send('falhou');
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const nomescad = req.body.nomescad;
        const senhacad = req.body.senhacad;

        const datauser = {
            nome: nomescad,
            senha: senhacad,
            point: 0
        };

        usuariosparse.push(datauser);

        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4), (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
                return;
            }

            console.log(result);
            res.send('Cadastro realizado com sucesso');
        });
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para responder à pergunta
app.post('/quest/responder', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const username = req.session.nome.nome; // Obtém o nome do usuário da sessão
        const user = usuariosparse.find(u => u.nome === username);

        // Lógica para manipular o arquivo usuarios.json quando uma pergunta for respondida corretamente
        // Exemplo: Aumenta a pontuação do usuário
        user.point += 1;

        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4), (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
                return;
            }

            console.log(result);

            // Você pode enviar uma resposta adequada ao cliente, se necessário
            res.json({ success: true, message: 'Resposta correta!', newPoints: user.point });
        });
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.post('/updateUserPoints', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const username = req.session.nome.nome; // Obtém o nome do usuário da sessão
        const user = usuariosparse.find(u => u.nome === username);

        // Lógica para manipular o arquivo usuarios.json quando uma pergunta for respondida corretamente
        // Exemplo: Aumenta a pontuação do usuário
        user.point += 1;

        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4), (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
                return;
            }

            console.log(result);

            // Você pode enviar uma resposta adequada ao cliente, se necessário
            res.json({ success: true, message: 'Resposta correta!', newPoints: user.point });
        });
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Adicione esta rota ao seu arquivo backend.js
app.post('/subtractUserPoints', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const username = req.session.nome.nome; // Obtém o nome do usuário da sessão
        const user = usuariosparse.find(u => u.nome === username);

        // Lógica para diminuir a pontuação do usuário
        user.point -= req.body.points;

        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4), (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
                return;
            }

            console.log(result);

            // Você pode enviar uma resposta adequada ao cliente, se necessário
            res.json({ success: true, message: 'Pontos subtraídos!', newPoints: user.point });
        });
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Adicione a rota para obter dados do ranking
app.get('/getRankData', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        // Ordene os usuários por pontuação em ordem decrescente
        const sortedUsers = usuariosparse.sort((a, b) => b.point - a.point);

        // Limita a tabela de classificação aos primeiros 5 usuários
        const topUsers = sortedUsers.slice(0, 5);

        res.json(topUsers);
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Adicione esta rota ao seu arquivo backend.js
app.post('/updatePoints', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const username = req.body.username; // Obtém o nome do usuário do corpo da solicitação
        const user = usuariosparse.find(u => u.nome === username);

        // Lógica para manipular o arquivo usuarios.json quando a pontuação do usuário é atualizada
        // Exemplo: Aumenta a pontuação do usuário
        user.point += 1;

        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4), (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Erro interno do servidor');
                return;
            }

            console.log(result);

            // Retorna a resposta adequada ao cliente, incluindo a pontuação atualizada
            res.json({ success: true, message: 'Pontuação atualizada!', newPoints: user.point });
        });
    } catch (error) {
        console.error('Erro no servidor:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.get('/getPoints/:username', (req, res) => {
    try {
        const usuarioscad = fs.readFileSync('./usuarios.json');
        const usuariosparse = JSON.parse(usuarioscad);

        const username = req.params.username; // Obtém o nome do usuário dos parâmetros da URL
        const user = usuariosparse.find(u => u.nome === username);

        if (user) {
            // Retorna a pontuação do usuário
            res.json({ success: true, points: user.point });
        } else {
            // Se o usuário não for encontrado, retorna um erro 404
            res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao ler o arquivo usuarios.json:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});