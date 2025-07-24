function somar() {
    const primeiroNumero = Number (document.getElementById("primeiroNumero").value);
    const segundoNumero = Number (document.getElementById("segundoNumero").value);

window.alert("A soma dos números inseridos é: " + (primeiroNumero + segundoNumero));
}

function multiplica() {
    const primeiroNumeroMulti = Number (document.getElementById("primeiroNumeroMulti").value);
    const segundoNumeroMulti = Number (document.getElementById("segundoNumeroMulti").value);
    const resultado = primeiroNumeroMulti * segundoNumeroMulti;

    window.alert("O resultado da mutiplicação é: " + resultado);
}

function divisao() {
    const primeiroNumeroDivisao = Number (document.getElementById("primeiroNumeroDivisao").value);
    const segundoNumeroDivisao = Number (document.getElementById("segundoNumeroDivisao").value);
    const resultadoDivisao = primeiroNumeroDivisao / segundoNumeroDivisao;

    window.alert("O resultado da mutiplicação é: " + resultadoDivisao);
}

function subtracao() {
    const primeiroNumeroSub = Number (document.getElementById("primeiroNumeroSub").value);
    const segundoNumeroSub = Number (document.getElementById("segundoNumeroSub").value);
    const resultadoSub = primeiroNumeroSub - segundoNumeroSub;

    window.alert("O resultado da mutiplicação é: " + resultadoSub);
}
