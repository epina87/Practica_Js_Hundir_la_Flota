// Hundir la flota 

/* 
leyenda 

vacío   = ⚓
agua    = 💧
tocado  = 🎇
hundido = 🚩
barcos {
    portaaviones = 🛫 
    buque        = 🚢    
    submarino    = 🚇 
    crucero      = ⛵
    lancha       = 🚤

}


*/


// Crear package.jdon en node -> npm init --yes


//const player = require("./player.js")
//const board = require("./board.js")
//const funct = require("./function.js")
//const game = require("./game.js")


import  {player}  from "./player.js" 
import {buscar_posiciones} from "./function.js"
import {viewBoars,viewBoarsPlayer,viewBoarsPlayerGame,viewBoarsPlayerGameEnemy} from "./board.js"
import {startGame} from "./game.js"

let Player1 = new player("Player A","p1")
let Player2 = new player("Player B","p2")

let playerWin= ""



const positions_P1 = buscar_posiciones (Player1)
const positions_P2 = buscar_posiciones (Player2)



console.log( "===================================================")
console.log("========= The Battleship simulator starts =========")
console.log("===================================================")

console.log("")


console.log("Player A")
console.log("Own board:")
viewBoarsPlayer(Player1,positions_P1)
console.log("")

console.log("Player B")
console.log("Own board:")
viewBoarsPlayer(Player2,positions_P2)
console.log("")

console.log( "==================================")
console.log("========= The game starts =========")
console.log("===================================")

const listshoot = startGame(Player1,positions_P1,Player2,positions_P2)
const listshootA = listshoot[0]
const listshootB = listshoot[1]

console.log("")
console.log("")

if (Player1.points > Player2.points ){
    Player1.win()
    playerWin = "Player A"
}else if (Player2.points > Player1.points ){
        Player2.win()
        playerWin = "Player B"
    }else{
        console.log( `The result is a tie` )
        playerWin = "Player A and Player B"
    }

console.log("")

console.log("===================================")
console.log(`========= ${playerWin} =========`)
console.log("===================================")

console.log("And the final boards are")

console.log("Player A")
console.log("Own board:")
viewBoarsPlayerGame(Player1,Player2,listshootB,positions_P1)

console.log("")
console.log("Player B")
console.log("Own board:")
viewBoarsPlayerGame(Player2,Player1,listshootA,positions_P2)











