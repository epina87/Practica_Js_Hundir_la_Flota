const objects = require("./objects")
const board = require("./board")
const funct = require("./function")

//const ships_old = ['portaaviones1','buque1','submarino1','submarino2','crucero1','crucero2','crucero3','lancha1','lancha2','lancha3']



let Player1 = new objects.Player("Enric")
let Player2 = new objects.Player("Silvia")


// Player1.win()




const positions_P1 = funct.buscar_posiciones (Player1)
const positions_P2 =funct.buscar_posiciones (Player2)


console.log( "===================================================")
console.log("========= The Battleship simulator starts =========")
console.log("===================================================")

console.log("")
console.log("")

console.log("Player A")
console.log("Own board:")


board.viewBoarsPlayer(Player1,positions_P1)

//board.viewBoars()









