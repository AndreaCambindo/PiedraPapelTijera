//FORMA CON FUNCION
function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if (jugada == 1){
    resultado = "Piedra ✊"
    } else if (jugada == 2){
    resultado = "Papel ✋"
    } else if (jugada == 3){
    resultado ="Tijera ✌"
    } else {
    resultado = "MAL ELEGIDO ❌"
    } return resultado
}
// 1 es piedra, 2 es papel y 3 es Tijera.
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0
                
while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
                    
// FORMA MANUAL O SIN FUNCION
//let min = 1
//let max = 3
//let pc = Math.floor(Math.random() * (max - min + 1) + min)
                    
jugador = prompt("Elige: 1 para Piedra, 2 para Papel y 3 para Tijera")
//alert("Elegiste " + jugador)

alert("PC elige: "+ eleccion(pc))
alert("Tu eliges: "+ eleccion(jugador))
                    
//COMBATE
if (pc==jugador){
    alert("EMPATE")
    }else if(jugador == 1 && pc == 3){
    alert("GANASTE! 🎉")
    triunfos+=1
    }else if(jugador == 2 && pc == 1){
    alert("GANASTE! 🎉")
    triunfos+=1
    }else if(jugador == 3 && pc == 2){
    alert("GANASTE! 🎉")
    triunfos+=1
    }else {
    alert("PERDISTE! ☹")
    perdidas+=1
    }
}
alert("Ganaste "+ triunfos + " veces. Perdiste "+ perdidas + " veces.")