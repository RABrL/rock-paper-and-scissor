let intentos = Math.floor(parseInt(prompt('cuantos veces quiere jugar')))
let puntosJugador=0,puntosMaquina=0
while(intentos>0){
    let opcionJugador = parseInt(prompt('Elige una opcion:\n\n1.Piedra\n2.Papel\n3.Tijera'))
    if(opcionJugador>3 || opcionJugador<1){
        alert('opcion invalida, Perdiste')
        puntosMaquina++
    }else{
        let opcionMaquina = Math.floor(Math.random()*3+1)
        if(opcionJugador===opcionMaquina){
            alert('Es un empate ambos jugador sacaron')
        }else if (opcionJugador===1 && opcionMaquina===2){
            alert('Tu sacaste Piedra y la maquina saco papel\nPerdiste')
            puntosMaquina++
        }else if(opcionJugador===2 && opcionMaquina===3){
            alert('Tu sacaste Papel y la maquina saco Tijera\nPerdiste')
            puntosMaquina++
        }else if(opcionJugador===3 && opcionMaquina===1){
            alert('Tu sacaste Tijera y la maquina saco Piedra\nPerdiste')
            puntosMaquina++
        }else{
            if(opcionJugador===1 && opcionMaquina===3){
                alert('Tu sacaste Piedra y la maquina saco Tijera\nGanaste')
                puntosJugador++
            }else if(opcionJugador===2 && opcionMaquina===1){
                alert('Tu sacaste Papel y la maquina saco Piedra\nGanaste')
                puntosJugador++
            }else if(opcionJugador===3 && opcionMaquina===2){
                alert('Tu sacaste Tijera y la maquina saco Papel\nGanaste')
                puntosJugador++
            }  
        }
    }
    if(intentos===1){
    if(puntosJugador==puntosMaquina){
        alert('Que curioso, han quedado empate')
    }else if (puntosJugador>puntosMaquina){
        alert('Felicitaciones, has ganado con un puntaje de ' + puntosJugador + ' vs un puntaje de ' + puntosMaquina + ' de la maquna')
    }else{
        alert('Que triste :(, has perdido con un puntaje de ' + puntosJugador + ' vs un puntaje de ' + puntosMaquina + ' de la maquna')
    }
    }
    intentos--
}