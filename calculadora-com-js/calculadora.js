//CRIANDO UMA CALCULADORA COM JAVA SCRIPT
/*
number() - para converter valores em números;
prompt() - para registrar entradas de usuários;
alert() - para mostrar mensagem ao usuário;
template string - para usar strings junto com expressões;
*/

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        dicisaoInteira();
    } else if (operacao == 6){
        potenciacao();
    }
}

calculadora();
