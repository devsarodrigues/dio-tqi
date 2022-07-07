//             ESTRUTURAS CONDICIONAIS


/*var jogador1 = 0;
var jogador2 = 1;
var placar;

//IF TERNÁRIO = [CONDIÇÃO] ? [INSTRUÇÃO1] : [INSTRUÇÃO2];
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

//USANDO IF
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}

//IF DENTRO DE IF === NINHO DE IF
if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguém marcou ponto');
    }
}

//USANDO ELSE IF
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}

//USANDO ELSE
else {
    console.log('Ninguém marcou ponto');
}

//SWITCH CASE
SWITCH (EXPRESSÃO) {
    case 1:
        (INSTRUÇÃO 1);
        break;
    case 2:
        (INSTRUÇÃO 2);
        break;
//EXEMPLO
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou!');
        break;
}*/


//////////////////////////////////////////////////////////
//             LAÇOS DE REPETIÇÃO
//        FOR; FOR/IN; FOR/OF; WHILE; DO/WHILE;


/*let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}*/

// for - executa uma instrução até que ela seja falsa
//FOR ([EXPRESSÃOINICIAL]; [CONDIÇÃO]; [INCREMENTO]) {DECLARAÇÃO}
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/

// for/in - executa uma repetição a partir de uma propriedade
//FOR ([ÍNDICE] IN [OBJETO OU ARRAY]) { DECLARAÇÃO }

//com array
/*for (let i in array) {
    console.log(i);
}

//com objeto
for (i in object) {
    console.log(i);
}*/

//for/of - executa a repetição a partir de valor
//FOR ([ÍNDICE] OF [ARRAY]) {DECLARAÇÃO}

//for com array
/*for (i of array) {
    console.log(i);
}*/

//for com object - só sera possível se o object estiver associado a sua ou uma propriedade
/*for (i of object.propriedade1) {
    console.log(i);
}*/

//while - executa uma instrução ENQUANTO determinada condição for verdadeira. (a verificação é feita antes da execução, caso contrario ele vai fazer um loop infinito)

/*var a = 0;

while(a < 10) {
    a++;
    console.log(a)
} LEIA-SE: enquanto a variável a for menor que 10, então ela recebe mais um e imprimir no console.

//do/while - executa uma instrução ATÉ QUE determinada condição seja falsa. (a verificação é feita depois da execução)

do {
    a++;
    console.log(a);
} while (a < 10) 
LEIA-SE: a varável a vai receber mais um e imprimir no console ATÉ QUE seu valor chegue a 10.*/



/////////////////////////////////////////////////////////////////////////////
//                      FUNÇÕES
//TODAS AS FUNÇÕES DEVEM TER nomeDaFuncao
/*EX.: function nomeDaFunção () {
    instrução;
}

nomeDaFunção();*/

/*function funcao() {
    console.log('tudo vai dar certo jovem!');
}

funcao();*/
//()indica que é um objeto do tipo function
//{}indica que é um bloco de instruções

//função com parâmetros
/*EX: function nomeDaFuncao(parametro) {
    instrucao;
}

nomeDaFuncao(valorDoParametro);*/

/*function mensagem(parametro1, parametro2) {
    console.log(parametro1, parametro2)
}

mensagem('tudo', 'certo');*/

//FUNÇÕES DECLARATIVAS
/*function funcao() {
    console.log('tudo vai dar certo jovem!');
}

funcao();*/


//EXPRESSÕES DE FUNÇÕES
//com nemeação
/*EX. 1: var funcao = function nomeDaFuncao() {
    instrucao;
}

funcao();

//sem nomeação - o js passa o nome da variável para a função.
EX. 2: var funcao = function() {
    instrucao;
}
var funcao = function() {
    console.log('exemplo 2');
}
funcao();

//ARROW FUNCTION - SÃO FUNÇÕES DE SITAXE CURTA E SEMRPE SERÃO ANÔNIMAS, SENDO ASSIM NÃO PODEM SER NOMEADAS, SÃO DECLARADAS COM PARÊNTESES E SEGUIDAS DE => E DEPOIS {}

/*EX. 1: var funcao = () => {
    instrucao;
}*/

var funcao = () => {
    console.log('exemplo 2');
}
funcao();
