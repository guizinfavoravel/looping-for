//programa que solicita ao usuario um numero que solicita o numero de 1 até o numero digitado

//solicita ao usuario maior que 1

const num = parseInt(prompt("digite um numero para somar de 1 até ele"));

//inicializa a variavel de soma com 0 pois ainda nao somamos nada 

let soma = 0;

if (isNaN(num) || num <= 1) {
    alert("vocce nao digitou um numero menor que 1")
} else {

    /*
    estrutura loop for:
    -inicialização let i = 1 >começa o contador i e 1 
    -Condição: i<=num o loop continu enquanto i for menos ou igual a num (variavel que armazena o numero de usuario)
    -atualização: i++ -> A cada repetição 
    */

    for (let i = 1; i <= num; i++) {
        //a cada repetição , somamos o valor de i á variavel soma.

        soma += i; // soma = soma +1 
    }

    alert(`A soma de 1 até ${num} é: ${soma}`);
}