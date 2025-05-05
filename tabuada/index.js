const numero = parseInt(prompt("Digite o número para ver a tabuada:"));

if (!isNaN(numero)) {
  let resultado = " ";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) +"\n";
  }

  alert(resultado);
} else {
  alert("Você digitou um valor inválido.");
}