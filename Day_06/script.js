let paulo = {
    name: 'Paulo',
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
}
let rafa = {
    name: 'Rafaela',
    victories: 0,
    ties: 0,
    defeats: 0,
    points: 0
}

function pointsCalculator(player) {
    let res = player.victories * 3 + player.ties * 1 - player.defeats * 2;
    return res
}
rafa.points = pointsCalculator(rafa)
paulo.points = pointsCalculator(paulo)

let players = [paulo, rafa]

function playersInScreen (players) {
    let html = ''
    for (i = 0; i < players.length; i++) {
        html += `<tr><td> ${players[i].name}</td>`
        html += `<td> ${players[i].victories}</td>`
        html += `<td> ${players[i].ties}</td>`
        html += `<td> ${players[i].defeats}</td>`
        html += `<td> ${players[i].points}</td>`
        html += "<td> <button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    let playerstab = document.getElementById ('tabelaJogadores')
    playerstab.innerHTML = html
}
playersInScreen(players)

function adicionarVitoria (i) {
    let player = players[i]
    player.victories++
    player.points = pointsCalculator(player)
    playersInScreen(players)
}
function adicionarEmpate (i) {
    let player = players[i]
    player.ties++
    player.points = pointsCalculator(player)
    playersInScreen(players)
}
function adicionarDerrota (i) {
    let player = players[i]
    player.defeats++
    player.points = pointsCalculator(player)
    playersInScreen(players)
}