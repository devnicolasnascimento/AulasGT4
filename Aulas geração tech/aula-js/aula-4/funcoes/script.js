const prompt = require('prompt-sync')();
const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));
const operador = prompt('Digite o operador (+, -, *, /): ');

function calcular (a, b) {
    return eval(a + operador + b);
}

const result = calcular(num1, num2);
console.log('Resultado:', result);