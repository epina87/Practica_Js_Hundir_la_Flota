// GAME

//Import 
import {findStartPosition} from "./printer.js"
import {viewBoarsPlayerGame,viewBoarsPlayerGameEnemy,lineABC} from "./board.js"


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

//Total Puntos
const TOTALPOINT = 24 

//Lista de barcos tocados
let listTouchedA = []
let listTouchedB = []



export function startGame(Player1,positionsP1,Player2,positionsP2){
    let locationP1 = searchLocation(Player1)
    let locationP2 = searchLocation(Player2)
    
    while(numberShootA>numShootA || numberShootB>numShootB  ){

        if (turnPlayer == "A" && numberShootA>numShootA ){ 


            console.log(`Round ${countRoundA} for ${turnPlayer}`)
            console.log("=============")


            const position = findStartPosition(listshootA)

            //const position = askForShot(Player1,listshootA)

            let shootPoint =  String(position[0]) + String(position[1]) 
            listshootA.push(shootPoint)  

            const typeShoot = checkShoot(shootPoint,liveB,positionsP2,locationP2,Player1)
        
            console.log(`Shoot #${numShootA} to ${position[0]}${lineABC[position[1]]}:${typeShoot}`)

            console.log("Own board:")
            viewBoarsPlayerGame(Player1,Player2,listshootB,positionsP1)

            console.log("Enemy board:")
            viewBoarsPlayerGameEnemy(Player1,listshootA)
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

            const position = findStartPosition(listshootB)

            let shootPoint =  String(position[0]) + String(position[1]) 
            listshootB.push(shootPoint)  

            const typeShoot = checkShoot(shootPoint,liveA,positionsP1,locationP1,Player2)
        
            console.log(`Shoot #${numShootB} to ${position[0]}${lineABC[position[1]]}:${typeShoot}`)

            console.log("Own board:")
            viewBoarsPlayerGame(Player2,Player1,listshootA,positionsP2)

            console.log("Enemy board:")
            viewBoarsPlayerGameEnemy(Player2,listshootB)

            ++numShootB

            if (typeShoot=="💧"){                
                const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB)  
        
                turnPlayer  = changeTurnAB[0]
                countRoundA = changeTurnAB[1]
                countRoundB = changeTurnAB[2]
            }
            
            
        }


        if (Player1.points == TOTALPOINT || Player2.points == TOTALPOINT){
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
            // if  (Player.cod == "p1"){
            //     listTouchedA.push(shootPoint)
            // }else{
            //     listTouchedB.push(shootPoint)   
            // }
        }      
    }else{
        Player.shooter[shootPoint] = typeShoot
    }
     


    return typeShoot
         
}

function searchLocation(Player){

    let locationDic = {}
    for (let key of Object.keys(Player.ships)){
        
        const ship = Player.ships[key]        
        let positionShip = ship.location
        
        for(let i = 0; i < ship.location.length; i++) {
            locationDic[positionShip[i]] = ship.name
        }
    }

    return locationDic

}







