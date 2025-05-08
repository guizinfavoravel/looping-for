const num = parseInt(prompt("digite um numero para saber quais os compoe"));//aqui esta sendo declarada uma constante para saber quais numeros vao compor

if (isNaN(num) || num <= 1) {// aqui mostra que se num for menos que 1 ou igual a 1 sera invalido
    alert("você colocou um numero invalido")
} else {
    let sequencia = ""

    for (let i = 1; i <= num; i++) {//aqui mostra quqe a acão sera um loopoing, que a variavel i vai ser igual a 1
        sequencia = sequencia + " " + i;

    }
    alert(sequencia);

}

