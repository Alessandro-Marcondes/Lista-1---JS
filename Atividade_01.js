//Questão 1 Escreva uma função que calcule e retorne o fatorial de um número

function calculaFatorial(num) {
    let fatorial = 1
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}


// Questão 2  Escreva uma função que retorne uma String contendo uma sequência de N mensagens do texto informado pelo usuário. O valor de N e a mensagem são informados por parâmetro.

function repeteMensagens(mensagem, N) {
    let mensagem_final = '';
    for (let i = 0; i < N; i++) {
        mensagem_final += mensagem + ' ';
    }
    return mensagem_final
}




// Questão 3 Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,multiplicação e divisão e retorne o resultado da operação.
//Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que a operação informada é válida. Retorne nulo para os casos de erro.

function operacao(x, y, operacao) {
    switch (operacao) {
        case 'adicao':
            return x + y;
        case 'subtracao':
            return x - y;
        case 'divisao':
            if (y == 0) {
                return null;
            }
            return x / y;
        case 'multiplicacao':
            return x * y;
    }
}



//Questão 4 Escreva uma função que retorne um vetor contendo o resultado da tabuada de um número recebido por parâmetro. Cada resultado na respectiva posição do índice.

function tabuada(num) {
    let tabuada = [];
    for (let i = 0; i <= 10; i++) {
        tabuada.push(num * i);
    }
    return tabuada;
}



//Questão 5 Escreva uma função que retorne um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número 578. 
//O argumento da função e o retorno deve ser um valor inteiro.


function inverteNumero(numero) {
    let numero_invertido = parseFloat(numero.toString().split('').reverse().join('')) * Math.sign(numero);
    return numero_invertido;
}




//Questão 6 Escreva uma função que permita contar o número de vogais contidas em uma string fornecida por parâmetro. 
//Por exemplo, o usuário informa a string “Brocolis”, e a função retorna o número 3 (há 3 vogais nessa palavra).

function contaVogal(mensagem) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contagem = 0;
    for (let i = 0; i <= mensagem.length; i++) {
        if (vogais.includes(mensagem[i].toLowerCase())) {
            contagem++;
        }
    }
    return contagem;
}



//Questão 7 Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se a sequência está bem formada ou não. 
//O retorno deve ser um valor lógico. Exemplo: “(([]))” retorna true, “(([)])” retorna falso.


function fecharParenteses(parenteses) {
    let pilha = [];

    if(parenteses.length%2 != 0){
        return false;
    }
    for (let char of parenteses) {
        if (char === '(' || char ==='[') {
            pilha.push(char);

        } else if (char === ')') {
            let topo = pilha.pop();
            if (topo != '(') {
                return false
            }
        } else if (char === ']') {
            let topo = pilha.pop();
            if (topo != '[') {
                return false;
            }
        }
    }
    return true;
}


//Questão 8 Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e idade) aleatórios gerados dinamicamente. 
//O código deve ser sequencial; use uma lista de nomes pré-definida; e gere idades entre 18 e 90 anos.

function lista_obj(numero) {
    let objeto = [];
    let lista_nomes = ['Adriano', 'Flávia', 'Marcos', 'Cristiano', 'Nicolas', 'Pedrinho', 'Joseli', 'Pablo', 'Fiona', 'Chiquinho'];

    for (let i = 1; i <= numero; i++) {
        let nome = lista_nomes[Math.floor(Math.random() * lista_nomes.length)];
        let idade = 18 + Math.floor(Math.random() * (90 - 18));
        objeto.push({
            id: i,
            nome: nome,
            idade: idade
        })
    }
    return objeto

}



//Questão 9 Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a média de idades das pessoas presentes na lista.


function mediaIdade(lista_objetos) {
    let soma = 0;
    for (let objeto of lista_objetos) {
        soma += objeto.idade;
    }
    return soma / lista_objetos.length

}




//Questão 10 Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os dados por um dos atributos informados por parâmetros

function ordenar(lista_objetos, atributo) {

    return lista_objetos.sort((a, b) => {
        if (a[atributo] > b[atributo]) {
            return 1;
        } else if (a[atributo] < b[atributo]) {
            return -1
        } else {
            return 0;
        }
    });
}
