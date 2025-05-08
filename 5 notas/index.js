let soma = 0;// a primeira variavel sera delcarada para a somas
let nota = 0;//a segunda variavel sera declarada para conseguir somar

for (let i = 1; i <= 5; i++) {//a variavel esta sendo igualada a 1 e ira repetir 5 vezes
  nota = parseFloat(prompt("Digite a nota " + i + ":"));

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {//aqui mostra que se caso nao for o numero sera invalido 
    soma += nota;
  } else {
    alert("Nota inválida , tente novamente");
  }
}

let media = soma / 5;// a declaraçao da media sera feita pegando o valor da let soma e dividndo por 5 aparecendo sua media 
    alert("A média das 5 notas é: " + media.toFixed(2));