// Partida
const funct = require("./function")
const board = require("./board")

module.exports = {
    "startGame": startGame   
}

// Contador de rondas
let countRoundA = 0 
let countRoundB = 0

//lista de disparos efectuados
let listshootA = []
let listshootB = []

//Numero de disparos efectuados por Jugador
let numShootA = 0
let numShootB = 0

//Numero de disparos disponibles
let numberShootA = 100 
let numberShootB = 100

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
    lancha3 : 1
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
    lancha3 : 1
}

const totalPoint = 24 

//Lista de barcos tocdos
let listTouchedA = []
let listTouchedB = []




function startGame(Player1,positions_P1,Player2,positions_P2){
    location_P1 = SearchLocation(Player1)
    location_P2 = SearchLocation(Player2)
    
    while(numberShootA>numShootA || numberShootB>numShootB  ){

        if (turnPlayer == "A" && numberShootA>numShootA ){ 


            console.log(`Round ${countRoundA} for ${turnPlayer}`)
            console.log("=============")


            const position = funct.Buscar_Posicion_Inicial(listshootA)

            shootPoint =  String(position[0]) + String(position[1]) 
            listshootA.push(shootPoint)  

            const typeShoot = checkShoot(shootPoint,liveB,positions_P2,location_P2,Player1)
        
            console.log(`Shoot #${numShootA} to ${position}:${typeShoot}`)

            console.log("Own board:")
            board.viewBoarsPlayerGame(Player1,Player2,listshootB,positions_P1)

            console.log("Enemy board:")
            board.viewBoarsPlayerGameEnemy(Player1,listshootA)
            console.log("")
            
            ++numShootA

            if (typeShoot=="💧"){                
                const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB)  
        
                turnPlayer  = changeTurnAB[0]
                countRoundA = changeTurnAB[1]
                countRoundB = changeTurnAB[2]
            }

    
        }else if(turnPlayer == "B" && numberShootB>numShootB){   
            console.log(`Round ${countRoundB} for ${turnPlayer}`)
            console.log("=============")

            const position = funct.Buscar_Posicion_Inicial(listshootB)

            shootPoint =  String(position[0]) + String(position[1]) 
            listshootB.push(shootPoint)  

            const typeShoot = checkShoot(shootPoint,liveA,positions_P1,location_P1,Player2)
        
            console.log(`Shoot #${numShootB} to ${position}:${typeShoot}`)

            console.log("Own board:")
            board.viewBoarsPlayerGame(Player2,Player1,listshootA,positions_P2)

            console.log("Enemy board:")
            board.viewBoarsPlayerGameEnemy(Player2,listshootB)

            ++numShootB

            if (typeShoot=="💧"){                
                const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB)  
        
                turnPlayer  = changeTurnAB[0]
                countRoundA = changeTurnAB[1]
                countRoundB = changeTurnAB[2]
            }
            
            
        }


        if (Player1.points == totalPoint || Player2.points == totalPoint){
            break
        }
        
        if (numberShootB==numShootB){
            turnPlayer = "A"    
        }if (numberShootA==numShootA){
            turnPlayer = "B"    
        }
       
    }


    return[listshootA,listshootB]

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


function checkShoot(shootPoint,lives,positions,location,Player){
    
    let typeShoot = "💧"
    let namShipTouch 
    const element = positions.find(val => val == shootPoint)

  
    
    if (element != undefined){ 
        typeShoot = "🎇"
        ++Player.points 

 
        namShipTouch = location[shootPoint]

        --lives[namShipTouch] 
        
        
        if  (lives[namShipTouch]== 0){

            typeShoot = "🚩"

            for (let keyValue of Object.entries(location)){
                if (keyValue[1] == namShipTouch){
                    Player.shooter[keyValue[0]] = typeShoot 

                }
                
            }
            

        } else{
            Player.shooter[shootPoint] = typeShoot    
        }      
    }else{
        Player.shooter[shootPoint] = typeShoot
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





