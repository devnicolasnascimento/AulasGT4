// Crie um programa em JavaScript que simule um caixa eletrônico simples.

// O programa deve começar com um saldo de R$ 1.000,00 e apresentar ao usuário as seguintes opções:

// ===== BANCO JS =====

// 1 - Consultar saldo
// 2 - Depositar
// 3 - Sacar
// 4 - Sair

// Escolha uma opção:

// O programa deverá funcionar da seguinte forma:

// 1 - Consultar saldo: mostrar o saldo atual da conta.
// 2 - Depositar: pedir ao usuário o valor que deseja depositar e adicionar esse valor ao saldo.
// 3 - Sacar: pedir o valor do saque e verificar se o usuário possui saldo suficiente.
// Se tiver saldo suficiente, realizar o saque.
// Caso contrário, informar que o saldo é insuficiente.
// 4 - Sair: encerrar o programa e mostrar uma mensagem de encerramento.
// Caso o usuário digite uma opção inexistente, mostrar "Opção inválida".
// Regras
// O saldo deve ser atualizado após cada depósito ou saque.
// O usuário não pode sacar um valor maior que o saldo disponível.
// O usuário não pode depositar ou sacar valores menores ou iguais a 0.
// Ao consultar o saldo, mostre o valor com duas casas decimais.

console.log("====== BANCO JS ======");
console.log("1 - Consultar saldo\n2 - Depositar\n3 - Sacar\n4 - Sair");

let option = 3;
let saldo = 1000;
let deposito = 300;
let saque = 1200;

switch (option) {
  case 1:
    console.log(saldo);
    break;

  case 2:
    saldo += deposito;
    console.log(saldo);
    break;

  case 3:
    if (saque > saldo) {
      console.log(
        "Você não pode sacar pois o saque é maior que o valor na sua conta.",
      );
    } else {
      saldo -= saque;
      console.log(saldo);
      break;
    }
    console.log(saldo);
    break;

  case 4:
    console.log("Você optou por sair da conta, até breve!");
    break;
}