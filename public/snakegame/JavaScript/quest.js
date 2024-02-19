import { getRandomExerciseByLevel, getExercisesByLevel } from './exercises.js';
import { showHintsPopup } from './hints.js';

let currentExercise;
let userProgress;
let level;
let username;




function showHints() {
    const exercise = currentExercise;
    showHintsPopup(exercise);
}

document.addEventListener('DOMContentLoaded', function () {
    userProgress = 1;
    const actionButtons = document.getElementById('actionButtons');
    const hintsButton = document.getElementById('hintsButton');

    const params = new URLSearchParams(window.location.search);
    level = params.get('level');
    username = params.get('username'); // Obtenha o nome de usuário dos parâmetros da URL
    const progress = params.get('progress');

    if (progress) {
        userProgress = parseInt(progress, 10);
    }

    const exercises = getExercisesByLevel(level);

    const showNextQuestion = () => {
        if (userProgress <= 1) {
            const randomExercise = getRandomExerciseByLevel(level)[0];
            currentExercise = randomExercise;
            document.getElementById('exerciseTitle').textContent = currentExercise.title;
            document.getElementById('exerciseText').innerHTML = `<p>${currentExercise.text}</p>`;

            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';

            currentExercise.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option';
                button.textContent = String.fromCharCode(97 + index) + ') ' + option;
                button.onclick = function () {
                    checkAnswer(option, level, username);
                };
                optionsContainer.appendChild(button);
            });
        } else if (parseInt(level, 10) < 8) {
            Swal.fire({
                icon: 'success',
                title: 'Parabéns, Você Acertou!!',
                showCancelButton: true,
                confirmButtonText: 'Próximo',
                cancelButtonText: 'Sair',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Alteração para redirecionar para a primeira questão do próximo nível
                    level = parseInt(level, 10) + 1;
                    userProgress = 1;
                    window.location.href = `../html/quest.html?level=${level}&progress=${userProgress}&username=${username}`;
                } else {
                    const homeButton = document.createElement('button');
                    homeButton.textContent = 'Página Inicial';
                    homeButton.onclick = function () {
                        window.location.href = '../html/pagina1.html?username=${username}';
                    };
                    actionButtons.appendChild(homeButton);
                }
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Parabéns, você completou todas as questões!',
                showCancelButton: true,
                confirmButtonText: 'Refazer',
                cancelButtonText: 'Sair',
            }).then((result) => {
                if (result.isConfirmed) {
                    userProgress = 1;
                    window.location.href = `../html/quest.html?level=${'1'}&progress=${userProgress}&username=${username}`;
                } else {
                    const homeButton = document.createElement('button');
                    homeButton.textContent = 'Página Inicial';
                    homeButton.onclick = function () {
                        window.location.href = '../html/pagina1.html';
                    };
                    actionButtons.appendChild(homeButton);
                }
            });
        }
    };

    if (userProgress > exercises.length) {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns, Você Acertou!!',
            showCancelButton: true,
            confirmButtonText: 'Próximo',
            cancelButtonText: 'Sair',
        }).then((result) => {
            if (result.isConfirmed) {
                // Alteração para redirecionar para a primeira questão do próximo nível
                level = parseInt(level, 10) + 1;
                userProgress = 1;
                window.location.href = `../html/quest.html?level=${level}&progress=${userProgress}&username=${username}`;
            } else {
                const homeButton = document.createElement('button');
                homeButton.textContent = 'Página Inicial';
                homeButton.onclick = function () {
                    window.location.href = '../html/pagina1.html?username=${username}';
                };
                actionButtons.appendChild(homeButton);
            }
        });
    }  else {
        showNextQuestion();

        const exitButton = document.createElement('button');
        exitButton.textContent = 'Sair';
        exitButton.onclick = function () {
            window.location.href = '../html/pagina1.html?username=${username}';
        };
        actionButtons.appendChild(exitButton);
    }
});


function checkAnswer(selectedOption, level, username) {
    const correctAnswer = currentExercise.correctAnswer;

    if (selectedOption === correctAnswer) {
        const pointsToAdd = level;

        // Adicione a lógica para atualizar a pontuação do usuário
        updateUserPoints(username, pointsToAdd, (updateError, newPoints) => {
            if (updateError) {
                console.error(updateError);
                return;
            }

            if (userProgress < 8) {
                userProgress++;
                window.location.href = `../html/quest.html?level=${level}&progress=${userProgress}&username=${username}`;
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Parabéns, você completou todas as questões!',
                    showCancelButton: true,
                    confirmButtonText: 'Reiniciar',
                    cancelButtonText: 'Sair',
                }).then((result) => {
                    if (result.isConfirmed) {
                        userProgress = 1;
                        window.location.href = `../html/quest.html?level=${level}&username=${username}`;
                    } else {
                        const homeButton = document.createElement('button');
                        homeButton.textContent = 'Página Inicial';
                        homeButton.onclick = function () {
                            window.location.href = '../html/pagina1.html?username=${username}';
                        };
                        actionButtons.appendChild(homeButton);
                    }
                });
            }
        });
    } else {
        // Diminuir 1 ponto para resposta incorreta
        const pointsToSubtract = 1;

        // Adicione a chamada para a rota de backend que processa a diminuição de pontos
        subtractUserPoints(username, pointsToSubtract, (subtractError, newPoints) => {
            if (subtractError) {
                console.error(subtractError);
                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Resposta Incorreta!',
                showCancelButton: true,
                confirmButtonText: 'Refazer',
                cancelButtonText: 'Sair',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `../html/quest.html?level=${level}&username=${username}`;
                } else {
                    window.location.href = '../html/pagina1.html?username=${username}';
                }
            });
        });
    }
}

// Adicione a função para subtrair pontos do usuário no frontend
function subtractUserPoints(username, points, callback) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, points }),
    };

    fetch('http://localhost:3000/subtractUserPoints', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);

            if (data.success) {
                console.log('Pontos subtraídos:', data.newPoints);
                callback(null, data.newPoints);
            } else {
                callback('Erro ao subtrair pontos', null);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
            callback(error, null);
        });
}

function updateUserPoints(username, level, callback) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, level }),
    };

    fetch('http://localhost:3000/updateUserPoints', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);

            if (data.success) {
                console.log('Pontuação atualizada:', data.newPoints);
                callback(null, data.newPoints);
            } else {
                callback('Erro ao atualizar pontos', null);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
            callback(error, null);
        });
}

// Event listener para o botão de dicas
document.addEventListener('DOMContentLoaded', function () {
    const hintsButton = document.getElementById('hintsButton');
    hintsButton.addEventListener('click', showHints);
});