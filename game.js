// Partida
const funct = require("./function")

module.exports = {
    "startGame": startGame   
}

// Contador de rondas
let countRoundA = 0 
let countRoundB = 0

//lista de disparos efectuados
let listshootA = []
let listshootB = []

//Numero de disparos disponibles
const numShoot = 10

//Numero de disparos efectuados por Jugador
let numberShootA = 1 
let numberShootB = 1

//Control de turno de juego
let turnPlayer = "A" 

//Vidas de cada barco por jugador
let liveA = {
    portaaviones1 : 5,
    buque1 : 4, 
        
    submarino1 : 3, 
    submarino2 : 3, 
        
    crucero1: 2,        
    crucero2: 2,
    crucero3: 2,
        
    lancha1 : 1,
    lancha2 : 1,
    lancha3 : 1,
}

let liveB = {
    portaaviones1 : 5,
    buque1 : 4, 
        
    submarino1 : 3, 
    submarino2 : 3, 
        
    crucero1: 2,        
    crucero2: 2,
    crucero3: 2,
        
    lancha1 : 1,
    lancha2 : 1,
    lancha3 : 1,
}

//Lista de barcos tocdos
let listTouchedA = []
let listTouchedB = []

function startGame(Player1,positions_P1,Player2,positions_P2){
    location_P1 = SearchLocation(Player1)
    location_P2 = SearchLocation(Player2)
    

    while(numberShootA<numShoot && numberShootB<numShoot){

        if (turnPlayer == "A"){   
            console.log(`Round ${countRoundA} for ${turnPlayer}`)
            console.log("=============")


            const position = funct.Buscar_Posicion_Inicial(listshootA)

            shootPoint =  String(position[0]) + String(position[1]) 
            listshootA.push(shootPoint)  

            const typeShoot = checkShoot(shootPoint,liveA,positions_P2,location_P2)


            console.log(`Shoot #${numberShootA} to ${position}:${typeShoot}`)
            //console.log(live["buque1"])
        }

        if (turnPlayer == "B"){   
            console.log(`Round ${countRoundB} for ${turnPlayer}`)
            console.log("=============")


            
        }

        
        const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB)  




         turnPlayer  = changeTurnAB[0]
         countRoundA = changeTurnAB[1]
         countRoundB = changeTurnAB[2]

        ++numberShootA
        ++numberShootB
    }


}


function changeTurn(turnPlayer,countRoundA,countRoundB){
    if (turnPlayer == "A"){
        ++countRoundA
        turnPlayer ="B"
    }else{
        ++countRoundB
        turnPlayer ="A"
    }
    return [turnPlayer,countRoundA,countRoundB]
}


function checkShoot(shootPoint,liveA,positions_P2,location_P2){
    
    let typeShoot = "💧"
    const element = positions_P2.find(val => val == shootPoint)
    if (element != undefined){ 
        typeShoot = "🎇"

        const namShipTouch = location_P2[shootPoint]
        --liveA[namShipTouch] 
        if  (liveA[namShipTouch]== 0){

            typeShoot = "🏴‍☠️"
        } 

        
    }

    return typeShoot
         
}

function SearchLocation(Player){

    let locationDic = {}
    for (let key of Object.keys(Player.ships)){
        
        const ship = Player.ships[key]        
        let position_ship = ship.location
        
        for(let i = 0; i < ship.location.length; i++) {
            
            locationDic[position_ship[i]] = ship.name
        }
    }

    return locationDic

}



