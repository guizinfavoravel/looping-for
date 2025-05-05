let soma = 0;
let nota = 0;

for (let i = 1; i <= 5; i++) {
  nota = parseFloat(prompt("Digite a nota " + i + ":"));

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    soma += nota;
  } else {
    alert("Nota inválida , tente novamente");
  }
}

let media = soma / 5;
    alert("A média das 5 notas é: " + media.toFixed(2));