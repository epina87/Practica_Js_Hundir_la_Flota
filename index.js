const objects = require("./objects")
const board = require("./board")
const funct = require("./function")
const game = require("./game")

//const ships_old = ['portaaviones1','buque1','submarino1','submarino2','crucero1','crucero2','crucero3','lancha1','lancha2','lancha3']



let Player1 = new objects.Player("Enric")
let Player2 = new objects.Player("Silvia")

let playerWin= ""



const positions_P1 = funct.buscar_posiciones (Player1)
const positions_P2 =funct.buscar_posiciones (Player2)



console.log( "===================================================")
console.log("========= The Battleship simulator starts =========")
console.log("===================================================")

console.log("")


console.log("Player A")
console.log("Own board:")
board.viewBoarsPlayer(Player1,positions_P1)
console.log("")

console.log("Player B")
console.log("Own board:")
board.viewBoarsPlayer(Player2,positions_P2)
console.log("")

console.log( "==================================")
console.log("========= The game starts =========")
console.log("===================================")

const listshoot = game.startGame(Player1,positions_P1,Player2,positions_P2)
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

console.log( "==================================")
console.log(`========= ${playerWin} =========`)
console.log("===================================")

console.log("And the final boards are")

console.log("Player A")
console.log("Own board:")
board.viewBoarsPlayerGame(Player1,Player2,listshootB,positions_P1)

console.log("")
console.log("Player B")
console.log("Own board:")
board.viewBoarsPlayerGame(Player2,Player1,listshootA,positions_P2)











