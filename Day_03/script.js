var secretNumber = parseInt(Math.random() * 10)
var tried = 3


while (tried > 0) {
    var number = parseInt(prompt("Descubra o número que a máquina está pensando:"))

    if (number == secretNumber) {
        alert ("Você venceu a máquina.")
        break
    } else if (number < secretNumber) {
        alert ("O número que você colocou é menor do que o número que a máquina pensou.")
        tried = tried - 1
    } else if (number > secretNumber)  {
        alert ("O número que você colocou é maior do que o número que a máquina pensou.")
        tried = tried - 1
    }
}
if (number != secretNumber) {
    alert (`Suas tentativas acabaram, que pena. O número secreto era ${secretNumber}`)
}