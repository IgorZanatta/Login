import { getExercisesByLevel } from './exercises.js';

const hintsMapping = {
    //1
    'Tag title html': [
        'A tag title é usada para definir que aspecto da página HTML?',
        'O conteúdo da tag title aparece na barra de título do navegador.',
        'O texto dentro da tag title é fundamental para SEO (Search Engine Optimization).'
    ],
    '<h1> e <strong> no HTML': [
        'A tag h1 é usada para definir um cabeçalho de nível 1, indicando a importância do texto.',
        'A tag strong é utilizada para enfatizar o texto',
        'Usar h1 corretamente melhora a semântica da página, enquanto strong destaca visualmente.'
    ],
    'Cor de um elemento no CSS': [
        'Tente pesquisar em sites alternativos para compreender',
        'Lembre-se de que esta propriedade controla a cor de fundo do elemento, não a cor do texto.',
        'Para alterar a cor do texto, você deve usar a propriedade "color".'
    ],
    'Centralizar um Elemento': [
        'Tente pesquisar em sites alternativos para compreender',
        'Isso ajusta automaticamente as margens laterais do elemento, centralizando-o na horizontal.',
        'Lembre-se de que outras abordagens, como "text-align: center" e "display: flex", podem ser usadas em contextos específicos.'
    ],
    'console.log()': [
        'Qual é a finalidade principal do comando console.log() em JavaScript?',
        'Ao utilizar console.log(), qual parte específica do navegador é afetada?',
        'Lembre-se de que console.log() é frequentemente utilizado para qual tipo de atividade durante o desenvolvimento?'
    ],
    //2
    'Criar lista ordenada': [
        'Lembre-se de que uma lista ordenada deve ser criada usando a tag apropriada.',
        'Considere as opções fornecidas e escolha aquela que representa corretamente a tag para listas ordenadas.',
        'Revise a documentação do HTML para garantir familiaridade com as tags de listas.',
    ],
    'Tag HTML': [
        'Qual tag HTML é responsável por definir a estrutura principal da página?',
'Ao escolher entre as opções fornecidas, como a tag selecionada influencia a exibição e organização do conteúdo na página?',
        'Lembre-se de que <head> é usado para metadados, <title> para o título da página e <meta> para informações adicionais.'
    ],
    'Largura de um elemento no CSS': [
        'No CSS, qual propriedade é utilizada para definir a largura de um elemento?',
        'Ao considerar o layout de uma página, como a propriedade mencionada influencia a disposição dos elementos?',
        'Lembre-se de que "font-size", "background-color" e "text-align" são propriedades que controlam outros aspectos do elemento.'
    ],
    'Variável em JavaScript': [
        'Ao declarar uma variável em JavaScript para armazenar o nome do usuário, quais são as opções disponíveis?',
        'Como a escolha entre "var", "let" e "const" pode afetar o escopo da variável?',
        'Certifique-se de escolher a que melhor se adequa às suas necessidades e contexto.'
    ],
    
    'querySelector() no JavaScript': [
        'Qual é o propósito principal do método querySelector() em JavaScript?',
        'Ao utilizar o querySelector(), qual parte do documento HTML você está visando?',
        'Você pode especificar o elemento desejado usando seletores CSS dentro dos parênteses.',
        'Isso é útil para interagir com elementos HTML em seu código JavaScript.'
    ],
    'Estilo de um elemento usando JavaScript': [
        'Ao modificar o estilo de um elemento usando JavaScript, qual método é comumente empregado?',
        'Considere a seleção de um elemento específico.',
        'Quais são algumas propriedades de estilo comuns que você poderia modificar ao aplicar estilos dinamicamente a um elemento via JavaScript?',
        'Isso permite selecionar o elemento desejado e, em seguida, você pode manipular suas propriedades de estilo diretamente no código JavaScript.'
    ],
    
    'position: relative e position: absolute': [
        'Como o uso de "position: relative" afeta o posicionamento de um elemento em relação ao seu container?',
        'Quando você escolheria usar "position: absolute" em vez de "position: relative"?',
        'Qual é a principal diferença no comportamento de posicionamento ao alternar entre "position: relative" e "position: absolute"?',
        'Isso é essencial para o posicionamento preciso de elementos em diferentes contextos.'
    ],
    //3
    'Declaração de variável em JavaScript': [
        'Lembre-se das palavras-chave corretas para declarar variáveis em JavaScript.',
        'Considere a diferença entre as palavras-chave var, let e const em relação à declaração de variáveis.',
        'Revise a sintaxe básica para evitar erros de declaração de variáveis em JavaScript.',
    ],
    'HTML': [
        'A tag HTML que define a área de conteúdo principal da página é ---.',
        'Dentro da tag ----, você coloca o conteúdo principal da página, como artigos, seções ou outros elementos importantes.'
    ],
    
    'Espaçamento entre as letras no CSS': [
        'No CSS, a propriedade que define o espaçamento entre as letras de um texto é ----.',
        'Você pode ajustar esse valor para aumentar ou diminuir o espaço entre as letras, afetando a legibilidade e o estilo visual.'
    ],
    
    'Função em JavaScript': [
        'Para criar uma função em JavaScript a opção abaixo funciona:',
        '- function nomefuncao(x, y, z) { return; }',
        'Escolha a que melhor se adequa ao seu estilo de codificação e contexto.'
    ],
    'Função de método no JavaScript': [
        'Explique o conceito de eventos no contexto da web.',
        'Como o método addEventListener() facilita a programação orientada a eventos em JavaScript?',
        'Isso permite que você responda a ações do usuário, como cliques ou teclas pressionadas, executando código específico quando esses eventos ocorrem.'
    ],
    
    'Requisição HTTP': [
        'Esse objeto permite a comunicação assíncrona com servidores, permitindo a atualização dinâmica de conteúdo sem recarregar a página.',
        'As outras opções mencionadas não estão diretamente relacionadas a requisições HTTP.'
    ],
    //4
    'Erro de sintaxe em HTML': [
        'Identifique e corrija os erros presentes no código HTML fornecido.',
        'Qual é a importância da tag <title> dentro da tag <head>?',
        'Verifique a grafia correta dos elementos HTML no código fornecido.',
        'Lembre-se de que é importante prestar atenção aos detalhes, como letras maiúsculas e minúsculas, ao escrever código HTML.',
    ],
    'Analise HTML': [
        'Identifique e corrija os erros presentes no código HTML fornecido.',
        'Substitua < por <- e > por ->',
        'Certifique-se de usar a tag correta para o cabeçalho da página.',
    ],
    
    'Cabeçalho da Página': [
        'Diferencie a tag <header> da tag <head> em termos de finalidade e conteúdo.',
        'Utilize <header> para melhorar a semântica da sua página, facilitando a compreensão do seu código.'
    ],

    'Propriedade que define a opacidade em CSS': [
        'Esta propriedade no CSS controla a transparência de um elemento.',
        'É amplamente utilizada para criar efeitos de transição suaves.',
        'Pode variar de 0 (totalmente transparente) a 1 (totalmente opaco).'
    ],
    
    'Como criar um objeto em JavaScript': [
        'Essa operação em JavaScript é fundamental para representar estruturas de dados.',
        'Existem diversas maneiras de realizar essa tarefa',
        'Lembre-se da sintaxe básica: nome da variável seguido por chaves {} contendo pares de chave-valor.',
        'Escolha a que melhor se adequa ao seu estilo de codificação e contexto.'
    ],
    'querySelectorAll() no JavaScript': [
        'Pense na funcionalidade do método, considerando o que é comum fazer ao selecionar elementos em uma página da web.',
        'Reflita sobre o que significa "seletor CSS" e como isso está relacionado à seleção de elementos no DOM.',
        'Isso é útil para manipular diversos elementos simultaneamente.'
    ],
    
    'Requisição AJAX usando JavaScript': [
        'Essa técnica é comumente utilizada para realizar requisições assíncronas em páginas web.',
        'Pense em como você pode interagir com um servidor para obter ou enviar dados sem recarregar a página inteira.',
        'As outras opções mencionadas não estão diretamente relacionadas à realização de requisições AJAX.'
    ],
    //5
    'Resultado da expressão JavaScript': [
        'Lembre-se de que o operador `+` pode ser usado para concatenar strings em JavaScript.',
        'Preste atenção à ordem de execução dos operadores na expressão.',
        'Revise como o JavaScript trata operações entre strings e números.',
    ],
    'Como criar uma classe em JavaScript?': [
        'Classes são uma maneira de modelar objetos em JavaScript, proporcionando uma estrutura mais orientada a objetos.',
        'A opção correta utiliza a sintaxe de classe introduzida no ECMAScript 6 (ES6).',
        'Lembre-se do uso do método construtor para inicializar os atributos da classe ao criar uma instância.'    
    ],
    'Propriedade que define a transição de um elemento': [
        'Esta propriedade é essencial para criar efeitos de transição suaves em elementos HTML.',
        'Ela permite es propriedades como cor, tamanho e posição ao longo de um período de tempo.',
        'Pode-se usar valores como "all" ou propriedades específicas para definir quais propriedades terão transições.'    
    ],
    'Função do método parentNode no JavaScript': [
        'Esse método é utilizado para navegar na hierarquia do DOM (Document Object Model).',
        'Ao chamá-lo em um elemento, você obtém o elemento pai desse nó no documento.',
        'Pode ser útil quando você precisa acessar ou manipular elementos relacionados no mesmo contexto.'
    ],
    
    'Requisição HTTP com autenticação em JavaScript': [
        'Esse processo é essencial ao lidar com APIs que requerem autenticação.',
        'O cabeçalho "Authorization" é usado para enviar credenciais ao servidor.',
        'Utilizar o objeto XMLHttpRequest permite fazer requisições assíncronas e manipular a resposta.'
    ],
    //6
    'Comparação de igualdade em JavaScript': [
        'Reflita sobre a diferença entre igualdade estrita e igualdade solta em JavaScript.',
    'Considere como `==` e `===` tratam valores e tipos de dados durante a comparação.',
    'Reveja a documentação do JavaScript para garantir uma compreensão clara das diferenças entre os operadores de igualdade.',
    ],
    'Como criar um módulo que exporta uma função e uma variável em JavaScript?': [
        'Considere a utilização da palavra-chave "export" para disponibilizar funções e variáveis de um módulo.',
        'Preste atenção à sintaxe correta de exportação de funções e variáveis no JavaScript.',
        'Lembre-se de que diferentes ambientes, como Node.js e navegadores, podem ter abordagens ligeiramente diferentes para a exportação de módulos.'
    ],
    'Função do método fetch() no JavaScript': [
        'É uma maneira moderna e mais poderosa de lidar com requisições do que o antigo XMLHttpRequest.',
        'O resultado da chamada fetch() é uma Promise que resolve na Response à requisição.',
        'Isso permite que você obtenha recursos de uma URL sem interromper a execução do restante do código.',
        'Lembre-se de que o fetch() retorna uma Promise que resolve para a Response da requisição.'
    ],
    'Web Storage': [
        'Essa tecnologia permite armazenar dados no navegador de forma persistente.',
        'Esses objetos oferecem uma maneira simples de armazenar dados no lado do cliente.',
    ],
    
    //7
    'Saída de Promise.allSettled()': [
        'Considere o uso do método Promise.allSettled() para lidar com um array de promessas.',
        'Preste atenção ao formato da saída, que incluirá objetos com informações sobre o status e o resultado ou motivo de cada promessa.',
        'Lembre-se de que Promise.allSettled() trata tanto promessas resolvidas quanto rejeitadas.'
    ],
    'Função para Calcular a Média de um Array': [
        'Considere a criação de uma função que aceita um array de números e retorna a média.',
        'Preste atenção à utilização correta do método reduce() para calcular a soma dos elementos.',
        'Lembre-se de dividir a soma pelo comprimento do array para obter a média.'
    ],
    'Função para Encontrar a String Mais Longa em um Array': [
        'Ao criar uma função para encontrar a string mais longa em um array, considere o uso de um loop for para iterar pelas strings.',
        'Lembre-se de comparar o comprimento de cada string com o comprimento da maior string encontrada até o momento.',
        'Preste atenção à lógica que determina a string mais longa e retorna o resultado.'
    ],
    'Função para Obter o Nome de um Objeto': [
        'Ao criar uma função para obter o nome de um objeto, considere a utilização direta da notação de ponto para acessar a propriedade "nome".',
        'Lembre-se de que a notação de colchetes também pode ser usada, mas a notação de ponto é mais comum para propriedades conhecidas.'
    ],
    //8
    'Função para retornar números pares': [
        'Ao criar uma função para retornar números pares de um array, considere o uso do método filter para aplicar a condição de paridade.',
        'Preste atenção à utilização da função de flecha e à condição num % 2 === 0 para filtrar os números pares.',
        'Lembre-se de que a programação funcional, em conjunto com a desestruturação, pode simplificar o código.'
    ],
    'Função para Adicionar a Classe "ativo" em HTML': [
        'Ao criar uma função para adicionar a classe "ativo" a um elemento HTML, considere o uso do método classList e a função add.',
        'Preste atenção à sintaxe correta para garantir que a classe seja adicionada sem substituir classes existentes.',
        'Lembre-se de que o método toggle pode ser útil se a intenção for alternar a classe entre ativa e inativa.'
    ],
    'Função para Remover a Classe "ativo" em HTML': [
        'Ao criar uma função para remover a classe "ativo" de um elemento HTML, considere o uso do método classList e a função remove.',
        'Preste atenção à sintaxe correta para garantir que apenas a classe desejada seja removida.',
        'Lembre-se de que o método toggle pode ser útil se a intenção for alternar a classe entre ativa e inativa.'
    ],
    'Função para Encontrar o Maior Número': [
        'Ao criar uma função para encontrar o maior número em um array, considere a utilização de um loop for para percorrer os números.',
        'Preste atenção à lógica que compara cada número com o maior número encontrado até o momento.',
        'Lembre-se de que existem várias abordagens para resolver esse problema, como Math.max(), sort() ou reduce().'
    ],
    // Adicione mais mapeamentos conforme necessário para outros exercícios
};

export function getTitlesForLevel(level) {
    const exercises = getExercisesByLevel(level);
    return exercises.map(exercise => exercise.title);
}

export function getHintsForExercise(exercise) {
    const hints = hintsMapping[exercise.title] || [];
    return hints;
}

export function showHintsPopup(exercise) {
    const hints = getHintsForExercise(exercise);
    if (hints.length > 0) {
        Swal.fire({
            title: 'Dicas',
            html: `<ul>${hints.map(hint => `<li>${hint}</li>`).join('')}</ul>`,
            icon: 'info',
        });
    } else {
        Swal.fire({
            title: 'Dicas',
            text: 'Desculpe, não há dicas disponíveis para este exercício.',
            icon: 'info',
        });
    }
}

window.showHintsPopup = showHintsPopup;