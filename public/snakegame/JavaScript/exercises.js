export function getRandomExerciseByLevel(level) {
    const exercises = getExercisesByLevel(level);

    if (exercises.length > 0) {
        const randomIndex = Math.floor(Math.random() * exercises.length);
        return [exercises[randomIndex]];
    }

    return [];
}


export function getExercisesByLevel(level) {
    // Adicione mais questões conforme necessário para cada nível
    switch (level) {
        case '1':
            return [
            
                {
                    title: 'Tag title html',
                    text: 'Qual a função da tag title no HTML?',
                    options: [
                    'Formatar o texto da página',
                    'Inserir imagens na página',
                    'Definir o título da página',
                    'Criar links para outras páginas'
                    ],
                    correctAnswer: 'Definir o título da página',
                    level: 1
                },

                {
                    title: 'h1 e strong no HTML',
                    text: 'Qual a diferença entre h1 e strong no HTML?',
                    options: [
                    '<h1> é um título maior que <strong>',
                    '<strong> é usado para formatar texto em negrito',
                    '<h1> define a estrutura da página, enquanto <strong> é apenas visual',
                    '<strong> é usado para links, enquanto <h1> é para títulos'
                    ],
                    correctAnswer: '<strong> é usado para formatar texto em negrito',
                    level: 1
                },
                    
                {
                    title: 'Cor de um elemento no CSS',
                    text: 'No CSS, qual a propriedade que define a cor de um elemento?',
                    options: [
                    'font-size',
                    'text-align',
                    'background-color',
                    'margin'
                    ],
                    correctAnswer: 'background-color',
                    level: 1
                },
                    
                {
                    title: 'Centralizar um Elemento',
                    text: 'Como centralizar um elemento horizontalmente no CSS?',
                    options: [
                    'text-align: end',
                    'margin: 0 auto',
                    'float: left',
                    'display: inline-block'
                    ],
                    correctAnswer: 'margin: 0 auto',
                    level: 1
                },
                    
                {
                    title: 'console.log()',
                    text: 'No JavaScript, qual a função do comando console.log()?',
                    options: [
                    'Exibir uma mensagem no console do navegador',
                    'Criar um novo elemento na página',
                    'Armazenar dados em uma variável',
                    'Fazer uma requisição HTTP'
                    ],
                    correctAnswer: 'Exibir uma mensagem no console do navegador',
                    level: 1
                }
            ];
        case '2':
            return [
                // O que é necessário para criar uma lista ordenada em HTML?
                {
                    title: 'Criar Lista Ordenada',
                    text: 'Qual tag é usada para criar uma lista ordenada em HTML?',
                    options: ['<ul>', '<li>', '<ol>', '<list>'],
                    correctAnswer: '<ol>',
                    level: 2
                },

                {
                    title: 'Tag HTML',
                    text: 'Qual a tag HTML que define a estrutura principal da página?',
                    options: [
                    '<head>',
                    '<body>',
                    '<title>',
                    '<meta>'
                    ],
                    correctAnswer: '<body>',
                    level: 2
                },

                {
                    title: 'Largura de um elemento no CSS',
                    text: 'No CSS, qual a propriedade que define a largura de um elemento?',
                    options: [
                    'font-size',
                    'width',
                    'background-color',
                    'text-align'
                    
                    ],
                    correctAnswer: 'width',
                    level: 2
                },

                {
                    title: 'Variável em JavaScript',
                    text: 'No JavaScript, como declarar uma variável que armazena o nome do usuário?',
                    options: [
                    'var nome = prompt("Digite seu nome:");',
                    'let nome = prompt("Digite seu nome:");',
                    'const nome = prompt("Digite seu nome:");',
                    'Todas as opções acima funcionam.'
                    ],
                    correctAnswer: 'Todas as opções acima funcionam.',
                    level: 2
                },

                {
                    title: 'querySelector() no JavaScript',
                    text: 'Qual a função do método querySelector() no JavaScript?',
                    options: [
                    'Exibir uma mensagem no console do navegador',
                    'Criar um novo elemento na página',
                    'Selecionar um elemento na página',
                    'Fazer uma requisição HTTP'
                    ],
                    correctAnswer: 'Selecionar um elemento na página',
                    level: 2
                },

                {
                    title: 'Estilo de um elemento usando JavaScript',
                    text: 'Como adicionar um estilo a um elemento específico usando JavaScript?',
                    options: [
                    'Usando a tag style no HTML',
                    'Usando o método addEventListener()',
                    'Usando o método querySelector()',
                    'Usando o método getElementById()'
                    ],
                    correctAnswer: 'Usando o método querySelector()',
                    level: 2
                },

                
                {
                    title: 'position: relative e position: absolute',
                    text: 'Qual a diferença entre position: relative e position: absolute no CSS?',
                    options: [
                    'position: relative posiciona o elemento em relação ao seu container, enquanto position: absolute posiciona o elemento em relação à página',
                    'position: relative permite mover o elemento com o mouse, enquanto position: absolute não',
                    'position: relative é usado para elementos flutuantes, enquanto position: absolute é usado para elementos posicionados',
                    'position: relative é usado para criar layouts responsivos, enquanto position: absolute não'
                    ],
                    correctAnswer: 'position: relative posiciona o elemento em relação ao seu container, enquanto position: absolute posiciona o elemento em relação à página',
                    level: 2
                }

            ];
        case '3':
            return [
                
                // Em JavaScript, como se declara uma variável?
                {
                    title: 'Declaração de variável em JavaScript',
                    text: 'Em JavaScript, como se declara uma variável?',
                    options: ['variable x;', 'var x;', 'int x;', 'let x;'],
                    correctAnswer: 'let x;',
                    level: 3
                },
                
                
                {
                    title: 'HTML',
                    text: 'Qual a tag HTML que define a área de conteúdo principal da página?',
                    options: [
                    '<head>',
                    '<body>',
                    '<title>',
                    '<main>'
                    ],
                    correctAnswer: '<main>',
                    level: 3
                },
                    
                {
                    title: 'Espaçamento entre as letras no CSS',
                    text: 'No CSS, qual a propriedade que define o espaçamento entre as letras de um texto?',
                    options: [
                    'font-size',
                    'letter-spacing',
                    'text-align',
                    'margin'
                    ],
                    correctAnswer: 'letter-spacing',
                    level: 3
                },
                    
                {
                    title: 'Função em JavaScript',
                    text: 'No JavaScript, como criar uma função que recebe dois números e retorna a soma?',
                    options: [
                    'function soma(a, b) { return a + b; }',
                    'let soma = function(a, b) { return a + b; }',
                    'const soma = (a, b) => { return a + b; }',
                    'Todas as opções acima funcionam.'
                    ],
                    correctAnswer: 'Todas as opções acima funcionam.',
                    level: 3
                },
                    
                {
                    title: 'Função de método no JavaScript',
                    text: 'Qual a função do método addEventListener() no JavaScript?',
                    options: [
                    'Exibir uma mensagem no console do navegador',
                    'Criar um novo elemento na página',
                    'Selecionar um elemento na página',
                    'Adicionar um evento a um elemento'
                    ],
                    correctAnswer: 'Adicionar um evento a um elemento',
                    level: 3
                },
                    
                {
                    title: 'Requisição HTTP',
                    text: 'Como fazer uma requisição HTTP usando JavaScript?',
                    options: [
                    'Usando a tag script no HTML',
                    'Usando o método querySelector()',
                    'Usando o método getElementById()',
                    'Usando o objeto XMLHttpRequest'
                    ],
                    correctAnswer: 'Usando o objeto XMLHttpRequest',
                    level: 3
                }
                    
            ];
        case '4':
            return [
                // Identifique o erro no seguinte trecho de HTML:
                {
                    title: 'Analise HTML',
                    text: ['<-headd-> <pre> <-title-> Minha Página <-/title-> <pre> <-/headd->'],
                    options: [
                    'Falta o ponto e vírgula após o "title"',
                    'A tag <headd> está incorreta; deveria ser <head>',
                    'A tag <headd> não existe em HTML; deveria ser <head>',
                    'O código HTML está correto'
                    ],
                    correctAnswer: 'A tag <headd> não existe em HTML; deveria ser <head>',
                    level: 4
                },
                
                {
                    title: 'Cabeçalho da Página',
                    text: 'Qual a tag HTML que define a área de cabeçalho da página?',
                    options: [
                    '<head>',
                    '<body>',
                    '<title>',
                    '<header>'
                    ],
                    correctAnswer: '<header>',
                    level: 4
                },
                    
                {
                    title: 'Propriedade que define a opacidade em CSS',
                    text: 'No CSS, qual a propriedade que define a opacidade de um elemento?',
                    options: [
                    'font-size',
                    'letter-spacing',
                    'opacity',
                    'text-align',
                    
                    ],
                    correctAnswer: 'opacity',
                    level: 4
                },
                    
                {
                    title: 'Como criar um objeto em JavaScript',
                    text: 'No JavaScript, como criar um objeto com nome, idade e cidade?',
                    options: [
                    'var pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };',
                    'let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };',
                    'const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };',
                    'Todas as opções acima funcionam.'
                    ],
                    correctAnswer: 'Todas as opções acima funcionam.',
                    level: 4
                },
                    
                {
                    title: 'querySelectorAll() no JavaScript',
                    text: 'Qual a função do método querySelectorAll() no JavaScript?',
                    options: [
                    'Exibir uma mensagem no console do navegador',
                    'Criar um novo elemento na página',
                    'Selecionar todos os elementos que correspondem a um seletor CSS',
                    'Adicionar um evento a um elemento'
                    ],
                    correctAnswer: 'Selecionar todos os elementos que correspondem a um seletor CSS',
                    level: 4
                },
                    
                {
                    title: 'Requisição AJAX usando JavaScript',
                    text: 'Como fazer uma requisição AJAX usando JavaScript?',
                    options: [
                    'Usando a tag script no HTML',
                    'Usando o método querySelector()',
                    'Usando o método getElementById()',
                    'Usando o objeto XMLHttpRequest'
                    ],
                    correctAnswer: 'Usando o objeto XMLHttpRequest',
                    level: 4
                }

            ];
        case '5':
            return [
                // Qual é o resultado da expressão em JavaScript?
            {
                title: 'Resultado da expressão JavaScript',
                text: 'Qual é o resultado da expressão `console.log(3 + "2" - 1);`?',
                options: [
                '32',
                '31',
                '"32"',
                '10'
                ],
                correctAnswer: '31',
                level: 5
            },
            
            {
                title: 'Propriedade que define a transição de um elemento',
                text: 'No CSS, qual a propriedade que define a transição de um elemento?',
                options: [
                'font-size',
                'letter-spacing',
                'text-align',
                'transition'
                ],
                correctAnswer: 'transition',
                level: 5
            },
            
            {
                title: 'Como criar uma classe em JavaScript?',
                text: 'No JavaScript, como criar uma classe com nome, idade e cidade e instanciar um novo objeto dessa classe?',
                options: [
                'class Pessoa { constructor(nome, idade, cidade) { this.nome = nome; this.idade = idade; this.cidade = cidade; } } const pessoa = new Pessoa("Ana", 25, "São Paulo");',
                'let Pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" }; const pessoa = new Pessoa();',
                'const Pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" }; const pessoa = new Pessoa();',
                'Todas as opções acima funcionam.'
                ],
                correctAnswer: 'class Pessoa { constructor(nome, idade, cidade) { this.nome = nome; this.idade = idade; this.cidade = cidade; } } const pessoa = new Pessoa("Ana", 25, "São Paulo");',
                level: 5
            },
            
            {
                title: 'Função do método parentNode no JavaScript',
                text: 'Qual a função do método parentNode no JavaScript?',
                options: [
                'Exibir uma mensagem no console do navegador',
                'Criar um novo elemento na página',
                'Selecionar o elemento pai de um elemento',
                'Adicionar um evento a um elemento'
                ],
                correctAnswer: 'Selecionar o elemento pai de um elemento',
                level: 5
            },
            
            {
                title: 'Requisição HTTP com autenticação em JavaScript',
                text: 'Como fazer uma requisição HTTP com autenticação usando JavaScript?',
                options: [
                'Usando a tag script no HTML',
                'Usando o método querySelector()',
                'Usando o método getElementById()',
                'Usando o objeto XMLHttpRequest com o cabeçalho Authorization'
                ],
                correctAnswer: 'Usando o objeto XMLHttpRequest com o cabeçalho Authorization',
                level: 5
            }
            
            ];
        case '6':
            return [
                // Qual é a diferença entre == e === em JavaScript?
                {
                    title: 'Comparação de igualdade em JavaScript',
                    text: 'Qual é a diferença entre == e === em JavaScript?',
                    options: [
                    '== compara apenas os valores, enquanto === compara valores e tipos.',
                    '=== compara apenas os valores, enquanto == compara valores e tipos.',
                    'Ambos comparam apenas os valores.',
                    'Ambos comparam valores e tipos.'
                    ],
                    correctAnswer: '== compara apenas os valores, enquanto === compara valores e tipos.',
                    level: 6
                },
                {
                    title: 'Como criar um módulo que exporta uma função e uma variável em JavaScript?',
                    text: 'No JavaScript, como criar um módulo que exporta uma função e uma variável?',
                    options: [
                    'export function soma(a, b) { return a + b; } export const nome = "Ana";',
                    'module.exports = { soma: function(a, b) { return a + b; }, nome: "Ana" };',
                    'const soma = (a, b) => { return a + b; }; const nome = "Ana"; export { soma, nome };',
                    'Todas as opções acima funcionam.'
                    ],
                    correctAnswer: 'Todas as opções acima funcionam.',
                    level: 6
                },
                
                {
                    title: 'Função do método fetch() no JavaScript',
                    text: 'Qual a função do método fetch() no JavaScript?',
                    options: [
                    'Exibir uma mensagem no console do navegador',
                    'Criar um novo elemento na página',
                    'Selecionar um elemento na página',
                    'Fazer uma requisição HTTP assíncrona'
                    ],
                    correctAnswer: 'Fazer uma requisição HTTP assíncrona',
                    level: 6
                },
                
                {
                    title: 'Web Storage',
                    text: 'Como usar o Web Storage para armazenar dados no navegador?',
                    options: [
                    'Usando a tag script no HTML',
                    'Usando o método querySelector()',
                    'Usando o método getElementById()',
                    'Usando os objetos localStorage e sessionStorage'
                    ],
                    correctAnswer: 'Usando os objetos localStorage e sessionStorage',
                    level: 6
                }
                
            ];
        case '7':
            return [
                // Qual é a saída do código a seguir em JavaScript?
                {
                    title: 'Saída de Promise.allSettled()',
                    text: 'Qual é a saída do código a seguir em JavaScript? Promise.allSettled ([Promise.resolve("Primeiro"), Promise.reject("Erro")]);',
                    options: [
                    '[{ status: "fulfilled", value: "Primeiro" }, { status: "rejected", reason: "Erro" }]',
                    '[{ status: "fulfilled", value: "Primeiro" }]',
                    '[{ status: "rejected", reason: "Erro" }]',
                    '["Primeiro", "Erro"]',
                    '[{ status: "pending" }, { status: "rejected", reason: "Erro" }]'
                    ],
                    correctAnswer: '[{ status: "fulfilled", value: "Primeiro" }, { status: "rejected", reason: "Erro" }]',
                    level: 7
                },

                {
                    title: 'Função para Calcular a Média de um Array',
                    text: 'Crie uma função JavaScript que recebe um array de números como parâmetro e retorna a média dos elementos do array:',
                    options: [
                    'function calcularMedia(array) { let soma = array.reduce((acc, curr) => acc + curr, 0); return soma / array.length; }',
                    'function calcularMedia(numeros) { return numeros.reduce((total, numero) => total + numero, 0) / numeros.length; }',
                    'function calcularMedia(numeros) { let soma = 0; for (let numero of numeros) { soma += numero; } return soma / numeros.length; }',
                    'function calcularMedia(array) { return array.reduce((soma, numero) => soma + numero, 0) / array.length; }',
                    'function calcularMedia(numeros) { return numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length; }'
                    ],
                    correctAnswer: 'function calcularMedia(numeros) { let soma = 0; for (let numero of numeros) { soma += numero; } return soma / numeros.length; }',
                    level: 7
                },

                {
                    title: 'Função para Encontrar a String Mais Longa em um Array',
                    text: 'Crie uma função JavaScript que recebe um array de strings como parâmetro e retorna a string mais longa do array:',
                    options: [
                        'function encontrarStringMaisLonga(strings) { let maiorString = ""; for (let string of strings) { if (string.length > maiorString.length) { maiorString = string; } } return maiorString; }',
                        'function encontrarStringMaisLonga(strings) { return strings.reduce((maiorString, string) => string.length > maiorString.length ? string : maiorString, ""); }',
                        'function encontrarStringMaisLonga(strings) { return strings.sort((a, b) => b.length - a.length)[0]; }',
                        'function encontrarStringMaisLonga(strings) { let maiorString = strings[0] || ""; for (let string of strings) { if (string.length > maiorString.length) { maiorString = string; } } return maiorString; }',
                        'function encontrarStringMaisLonga(strings) { return strings.find(s => s.length === Math.max(...strings.map(str => str.length))); }'
                    ],
                    correctAnswer: 'function encontrarStringMaisLonga(strings) { let maiorString = ""; for (let string of strings) { if (string.length > maiorString.length) { maiorString = string; } } return maiorString; }',
                    level: 7
                },

                {
                    title: 'Função para Obter o Nome de um Objeto',
                    text: 'Crie uma função JavaScript que recebe um objeto como parâmetro e retorna o valor da propriedade "nome" do objeto:',
                    options: [
                    'function obterNome(objeto) { return objeto["nome"]; }',
                    'function obterNome(objeto) { return objeto.nome; }',
                    'function obterNome(obj) { return obj.name || "Sem nome"; }',
                    'function obterNome(obj) { return obj.hasOwnProperty("nome") ? obj.nome : "Sem nome"; }',
                    'function obterNome(obj) { return obj.nome || "Sem nome"; }'
                    ],
                    correctAnswer: 'function obterNome(objeto) { return objeto.nome; }',
                    level: 7
                }
  
            ];
        case '8':
            return [
                // Qual das opções abaixo representa corretamente a função em JavaScript que recebe um array de números e retorna um novo array contendo apenas os números pares, utilizando programação funcional e desestruturação?
                {
                    title: 'Função para retornar números pares',
                    text: `
                        Qual das opções abaixo representa corretamente a função em JavaScript que recebe um array de números e retorna um novo array contendo apenas os números pares, utilizando programação funcional e desestruturação?
                    `,
                    options: [
                        `<code>function numerosPares(array) { return array.filter(num => num % 2 === 0); }</code>`,
                        `<code>function numerosPares(array) { return array.map(num => num % 2 === 0); }</code>`,
                        `<code>function numerosPares(array) { return array.reduce((acc, num) => { if (num % 2 === 0) { acc.push(num); } return acc; }, []); }</code>`,
                        `<code>function numerosPares(array) { return array.find(num => num % 2 === 0); }</code>`,
                        `<code>function numerosPares(array) { return array.reduce((acc, num) => num % 2 === 0 ? [...acc, num] : acc, []); }</code>`
                    ],
                    correctAnswer: `<code>function numerosPares(array) { return array.filter(num => num % 2 === 0); }</code>`,
                    level: 8
                }, 
                {
                    title: 'Função para Adicionar a Classe "ativo" em HTML',
                    text: 'Crie uma função JavaScript que recebe um elemento HTML como parâmetro e adiciona a classe "ativo" ao elemento:',
                    options: [
                    'function adicionarClasseAtivo(elemento) { elemento.className += " ativo"; }',
                    'function adicionarClasseAtivo(elemento) { elemento.classList.toggle("ativo"); }',
                    'function adicionarClasseAtivo(elemento) { elemento.classList.replace("", "ativo"); }',
                    'function adicionarClasseAtivo(elemento) { elemento.setAttribute("class", "ativo"); }',
                    'function adicionarClasseAtivo(elemento) { elemento.classList.add("ativo"); }'
                    ],
                    correctAnswer: 'function adicionarClasseAtivo(elemento) { elemento.classList.add("ativo"); }',
                    level: 8
                },
                {
                    title: 'Função para Remover a Classe "ativo" em HTML',
                    text: 'Crie uma função JavaScript que recebe um elemento HTML como parâmetro e remove a classe "ativo" do elemento:',
                    options: [
                    'function removerClasseAtivo(elemento) { elemento.className = elemento.className.replace("ativo", ""); }',
                    'function removerClasseAtivo(elemento) { elemento.classList.toggle("ativo"); }',
                    'function removerClasseAtivo(elemento) { elemento.classList.replace("ativo", ""); }',
                    'function removerClasseAtivo(elemento) { elemento.classList.remove("ativo"); }',
                    'function removerClasseAtivo(elemento) { elemento.setAttribute("class", ""); }'
                    ],
                    correctAnswer: 'function removerClasseAtivo(elemento) { elemento.classList.remove("ativo"); }',
                    level: 8
                },
                
                {
                    title: 'Função para Encontrar o Maior Número',
                    text: 'Crie uma função JavaScript que recebe um array de números como parâmetro e retorna o maior número do array:',
                    options: [
                    'function encontrarMaiorNumero(numeros) { return Math.max(...numeros); }',
                    'function encontrarMaiorNumero(numeros) { return numeros.reduce((max, numero) => numero > max ? numero : max, numeros[0]); }',
                    'function encontrarMaiorNumero(numeros) { let maiorNumero = numeros[0]; for (let numero of numeros) { if (numero > maiorNumero) { maiorNumero = numero; } } return maiorNumero; }',
                    'function encontrarMaiorNumero(numeros) { return numeros.sort((a, b) => b - a)[0]; }',
                    'function encontrarMaiorNumero(numeros) { return numeros.reduce((max, numero) => max > numero ? max : numero, numeros[0]); }'
                    ],
                    correctAnswer: 'function encontrarMaiorNumero(numeros) { let maiorNumero = numeros[0]; for (let numero of numeros) { if (numero > maiorNumero) { maiorNumero = numero; } } return maiorNumero; }',
                    level: 8
                }
            ];
        // Adicione mais casos para outros níveis
        default:
            return [];
    }
}