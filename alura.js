/*var nota1 = 10
var nota2 = 5.5
var nota3 = 7.1
var nota4 = 5.7

var notaFinal = (nota1  + nota2  + nota3  + nota4 ) / 4  


if(notaFinal < 7.5){
    console.log( "Você está reprovado")
}else{ 
console.log("Você está aprovado ")
}*/

function calcular() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value
    var n4 = document.getElementById("n4").value
    
    var media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

   

    console.log( `A média do aluno é: ${ media }`)
    document.getElementById( "resultado").innerText =("Sua média é: " + media)
}

