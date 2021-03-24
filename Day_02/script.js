
var firstNumber = document.getElementById("firstNumber")
var secondNumber = document.getElementById("secondNumber")
var resultadoF = document.getElementById("resultado")
var soma = document.getElementById("soma")
var subtracao = document.getElementById("subtrair")
var multiplicacao = document.getElementById("multiplicar")
var divisao = document.getElementById("dividir")


function somar() {
    resultadoF.innerHTML = (parseFloat(firstNumber.value) + parseFloat(secondNumber.value))
}
function somarTextIn() {
    soma.innerText='+'
}
function somarTextOut () {
    soma.innerText='Somar'
}
function subtrairTextIn() {
    subtracao.innerText='-'
}
function subtrairTextOut () {
    subtracao.innerText='Subtrair'
}
function multiplicarTextIn() {
    multiplicacao.innerText='x'
}
function multiplicarTextOut () {
    multiplicacao.innerText='Multiplicação'
}
function dividirTextIn() {
    divisao.innerText='/'
}
function dividirTextOut () {
    divisao.innerText='Divisão'
}
function subtrair() {
    resultadoF.innerHTML = (parseFloat(firstNumber.value) - parseFloat(secondNumber.value))
}
function multiplicar() {
    resultadoF.innerHTML = (parseFloat(firstNumber.value) * parseFloat(secondNumber.value))
}
function dividir() {
    resultadoF.innerHTML = (parseFloat(firstNumber.value) / parseFloat(secondNumber.value)).toFixed(3)
}
