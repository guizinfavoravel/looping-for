const numero = parseInt(prompt("Digite o número para ver a tabuada:"));//aqui a gente declara uma variavel const para saber a tabuada do numero digitado

if (!isNaN(numero)) {//aqui a declarava numero se for um numero o resultado ira aparecer na tela
  let resultado = " ";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) +"\n";//o professor me disse que /n quebra um alonha ou seja a gente declara que let i é igual a 1 e sera repetido 10 vezes
  }

  alert(resultado);
} else {
  alert("Você digitou um valor inválido.");//se voce nao  digitar um numero valido será dado um valor invalido 
}