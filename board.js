// BOARD

//Import 
import {printLine} from "./printer.js"

// filas del tablero
const ROWS = 10
// columnas del tablero
const COLS = 10
// figuras disponibles para las cartas
const FIGURES = ['⚓']


//Lista de valores verticales
export const lineABC = {
       0 : "A",
       1 : "B",
       2 : "C",
       3 : "D",
       4 : "E",
       5 : "F",
       6 : "G",
       7 : "H",
       8 : "I",
       9 : "J"  
}

let board = []

export function viewBoars(){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     printLine("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            let numColsString = String(numCols)        
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     printLine(lineBoard)
                     printLine("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   lineBoard += " '"+FIGURES[0] +"' │"
                            } 
                                   
                     }
                     printLine(lineBoard)                 
              }      
       }
       printLine("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}

export function viewBoarsPlayer(Player,positionsPlay){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {
              let posX = numRows-1
              

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     printLine("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            //let numColsString = String(numCols)        
                            let numColsString = lineABC[numCols]
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     printLine(lineBoard)
                     printLine("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            let posY = numCols-1

                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   const location = String(posX) + String(posY) 
                                   const element = positionsPlay.find(val => val == location)
                                   if (element == undefined){ 
                                          lineBoard += " '"+FIGURES[0] +"' │"
                                   }else{
                                          let figureImg = searchFigures(Player,location)    
                                          lineBoard += " '"+figureImg+"' │"

                                   }
                                   
                            } 
                                   
                     }
                     printLine(lineBoard)                 
              }      
       }
       printLine("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}

export function searchFigures(Player,location){
       let figureImg= FIGURES[0]
       for (let key of Object.keys(Player.ships)){
              const locationShip = Player.ships[key].location

              const element = locationShip.find(val => val == location)
              if (element != undefined){ 
                     figureImg = Player.ships[key].img       
              }

              


       }       

       return figureImg
}

export function viewBoarsPlayerGame(PlayerBoard,PlayerEnemy,listshoot,positionsPlay){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {
              let posX = numRows-1
              

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     printLine("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            //let numColsString = String(numCols)        
                            let numColsString = lineABC[numCols]
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     printLine(lineBoard)
                     printLine("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            let posY = numCols-1

                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   const location = String(posX) + String(posY) 
                                   const element = listshoot.find(val => val == location)
                                   if (element == undefined){ 

                                          const elementPosicion = positionsPlay.find(val => val == location)
                                          if (elementPosicion == undefined){ 
                                                 lineBoard += " '"+FIGURES[0] +"' │"
                                          }else{
                                                 let figureImg = searchFigures(PlayerBoard,location)    
                                                 lineBoard += " '"+figureImg+"' │"

                                          }

                                   }else{
                                          
                                          let figureImg = PlayerEnemy.shooter[location]  
                                          lineBoard += " '"+figureImg+"' │"

                                   }
                                   
                            } 
                                   
                     }
                     printLine(lineBoard)                 
              }      
       }
       printLine("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}

export function viewBoarsPlayerGameEnemy(PlayerBoard,listshoot){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {
              let posX = numRows-1
              

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     printLine("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            //let numColsString = String(numCols)  
                            let numColsString = lineABC[numCols]      
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     printLine(lineBoard)
                     printLine("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            let posY = numCols-1

                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   const location = String(posX) + String(posY) 
                                   const element = listshoot.find(val => val == location)
                                   if (element == undefined){ 
                                          lineBoard += " '"+FIGURES[0] +"' │"
                                   }else{
                                          
                                          let figureImg = PlayerBoard.shooter[location]  
                                          lineBoard += " '"+figureImg+"' │"

                                   }
                                   
                            } 
                                   
                     }
                     printLine(lineBoard)                 
              }      
       }
       printLine("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}