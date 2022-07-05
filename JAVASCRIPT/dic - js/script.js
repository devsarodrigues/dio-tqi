//tipos primitivos

//boleano
/*var vOuF = false;
console.log(typeof (vOuF));

//number
var numeroQualquer = 1;
console.log(typeof (numeroQualquer));

//string ou caractere
var nome = 'samantha';
console.log(typeof (nome));

//function
var funcao = function(){}
console.log(typeof (funcao));*/

//como declarar
/*var variável = 'samantha';
variável = 'rodrigues'
console.log(variável)*/

/*let variavel2 = 'samantha';
variavel2 = 'rodrigues';
console.log(variavel2);*/

/*const constante = 'samantha';
constante = 'rodrigues'; // não pde ser alterada por ser uma constante
console.log(constante);*/

/*var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();*/

//atribuição
/*var atribuicao = 'samantha';

//comparação;;
var comparacao = '0'== 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);*/

//adição
/*var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 4 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);*/

//operadores relacionais

//maior >
/*var maiorQue = 5 > 2;
console.log(maiorQue);

//menor <
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

//menor ou igual
var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);*/

// operadores lógicos

//e - considera todos os valores vdd
/*var e = true && false;

//ou - considera que qualquer valor seja vdd
var ou = true || false;
console.log(ou);

//não - inverte os valores de vdd/fls
var nao = !true;
console.log(nao);*/


//VETORES E OBJETOS

//vetores ou ARRAYS (como se fosse uma caixa que pode guardar outras caixas dentro.)

//como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

//array pode guardar vários tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]);*/

//manipulando array - forEach()intera um array / push() - add item no final do array / pop() - remove um ítem no final do array / unshift() - add ítem no início do array / indexOf() - retorna o índice de um valor / splice() - remove ou subtitui um ítem pelo índice / slice() - retorna uma parte de um array existente.

//forEach
/*array.forEach(function(item, index) {
    console.log(item, index)
});*/

//push
/*array.push('novo item');
console.log(array);*/

//pop
/*array.pop();
console.log(array);*/

//shift
/*array.shift();
console.log(array);*/

//unshift
/*array.unshift('novo item no inicio');
console.log(array);*/

//indexOf
/*console.log(array.indexOf(true));*/

//splice
/*array.splice(0, 3);
console.log(array);*/

//slice
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//OBJETOS - são declarados pelas chaves, que recebem as propriedades e seus devidos valores.
//exemplo: var xicara = {cor: 'azul', tamanho 'p', function: tomarCafé()}

/*let object = { string: 'string', number: 1, boolean: true, array: ["array"], objetctInterno: {objetctInterno: 'objeto interno'}};

console.log(object.boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objetctInterno} = object;
console.log(string, boolean, objetctInterno);*/

