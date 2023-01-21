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

//Import 
import  {player}  from "./player.js" 
import {searchPositions,printHeading,printLine} from "./printer.js"
import {viewBoars,viewBoarsPlayer,viewBoarsPlayerGame,viewBoarsPlayerGameEnemy} from "./board.js"
import {startGame} from "./game.js"

let Player1 = new player("Player A","p1")
let Player2 = new player("Player B","p2")

let playerWin= ""

const positionsP1 = searchPositions (Player1)
const positionsP2 = searchPositions (Player2)

printHeading("The Battleship simulator starts")
printLine("")


printLine("Player A")
printLine("Own board:")
viewBoarsPlayer(Player1,positionsP1)
printLine("")


printLine("Player B")
printLine("Own board:")
viewBoarsPlayer(Player2,positionsP2)
printLine("")


printHeading("The game starts")


const listshoot = startGame(Player1,positionsP1,Player2,positionsP2)
const listshootA = listshoot[0]
const listshootB = listshoot[1]

printLine("")


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

printLine("")
printHeading(`${playerWin}`)

printLine("And the final boards are")


printLine("")
printLine("Player A")
printLine("Own board:")
viewBoarsPlayerGame(Player1,Player2,listshootB,positionsP1)


printLine("")
printLine("Player B")
printLine("Own board:")
viewBoarsPlayerGame(Player2,Player1,listshootA,positionsP2)











