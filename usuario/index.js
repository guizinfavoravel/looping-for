let primeiroNum =  parseInt(prompt("Digite o primeiro número"));//declarando a primeira variavel para saber o primeiro numero de usuario
let segundoNum = parseInt(prompt("Digite o segundo número"));//declarando a segunda variavel para saber quantos numeros pares á ao meio das duas variaveis 
let mensagem = "";//ira servir para digitar o numero por isso esta igual a ''


if (isNaN(primeiroNum) || isNaN(segundoNum)) {
    alert("Você não digitou um numero válido");//se nas duas variaveis for digitado uma letra ou numero invalido nao dará certo 
} 
    
    for (let i = primeiroNum; i < segundoNum; i++ ) {//aqui a variavel let i vai ser igual a variavel primeiro num e vai saber se i e menor que segundo num pois sera repetida

        if (i % 2 == 0) {
            mensagem += i + " "// a variavel let i vai ser dividida e vai ser conferida se é igual a 0
        }
    }
    

alert(mensagem);


if (isNaN(numero1) || isNaN(numero2)) {
    alert("Você não digitou um numero valido");//aqui se a variavel numero 1 ou numero2 é um numero verdadeiro
}  else {
    
    for (let i = numero1; i <= numero2; ) {

        if (i % 2 == 0) {
            mensagem += i + " "//a variavel let i esta sendo igual a o numero 1 e tem vai conferir se é menor que o numero2 
        }
    }
    
}
alert(mensagem);