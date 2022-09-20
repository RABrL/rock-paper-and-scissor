let puntosJugador=0,puntosMaquina=0
let ataqueEnemigo,ataqueJugador,intentos
const ataques = ['Piedra','Papel','Tijera']
const empezar = document.querySelector('.start')
empezar.addEventListener('click',elegirIntentos)

function elegirIntentos(){
    intentos = Math.floor(parseInt(prompt('cuantos veces quiere jugar?')))
    if(intentos<1 || !intentos){
        alert('Numeros mayores que 0 porfavor')
        elegirIntentos()
    }else{
        elegirAtaqueJugador()
    }
}
function elegirAtaqueJugador(){
    ataqueJugador = parseInt(prompt('Elige una opcion:\n\n1.Piedra\n2.Papel\n3.Tijera'))
    if(ataqueJugador<1 || !ataqueJugador || ataqueJugador>3){
        alert('Elija un ataque valido!')
        elegirAtaqueJugador()
    }else{
        ataqueJugador=ataques[ataqueJugador-1]
        elegirAtaqueMaquina()
    }
}
function elegirAtaqueMaquina(){
    let numRandom = numAleatorio(0,ataques.length-1)
    ataqueEnemigo=ataques[numRandom]
    pelea()
}
function pelea(){
    if(ataqueEnemigo===ataqueJugador){
        alert('Es un empate ambos jugador sacaron ' + ataqueEnemigo)
    }else if(ataqueEnemigo=='Papel' && ataqueJugador=='Piedra'){
        alert('Tu sacaste ' + ataqueJugador + ' y la maquina saco ' + ataqueEnemigo + '\nPerdiste')
        puntosMaquina++
    }else if(ataqueEnemigo=='Tijera' && ataqueJugador=='Papel'){
        alert('Tu sacaste ' + ataqueJugador + ' y la maquina saco ' + ataqueEnemigo + '\nPerdiste')
        puntosMaquina++
    }else if(ataqueEnemigo=='Piedra' && ataqueJugador=='Tijera'){
        alert('Tu sacaste ' + ataqueJugador + ' y la maquina saco ' + ataqueEnemigo + '\nPerdiste')
        puntosMaquina++
    }else{
        alert('Tu sacaste ' + ataqueJugador + ' y la maquina saco ' + ataqueEnemigo + '\nGanaste')
        puntosJugador++
    }
    revisarIntentos()
}
function revisarIntentos(){
    intentos--
    if(intentos<=0){
        resultadoBatalla()
    }else{
        elegirAtaqueJugador()
    }
}
function resultadoBatalla(){
    if(puntosJugador==puntosMaquina){
        alert('Que curioso, han quedado empate')
    }else if (puntosJugador>puntosMaquina){
        alert('Felicitaciones, has ganado con un puntaje de ' + puntosJugador + ' vs un puntaje de ' + puntosMaquina + ' de la maquina')
    }else{
        alert('Que triste :(, has perdido con un puntaje de ' + puntosJugador + ' vs un puntaje de ' + puntosMaquina + ' de la maquina')
    }
}
function numAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1))
}