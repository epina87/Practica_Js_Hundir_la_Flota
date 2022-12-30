// TABLERO

module.exports = {
       "viewBoars": viewBoars,
       "viewBoarsPlayer":viewBoarsPlayer
   }

// filas del tablero
const ROWS = 10
// columnas del tablero
const COLS = 10
// figuras disponibles para las cartas
const FIGURES = ['⚓']

let board = []

function viewBoars(){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            let numColsString = String(numCols)        
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     console.log(lineBoard)
                     console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   lineBoard += " '"+FIGURES[0] +"' │"
                            } 
                                   
                     }
                     console.log(lineBoard)                 
              }      
       }
       console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}


function viewBoarsPlayer(Player,positions_Play){
       for(let numRows = 0; numRows < ROWS+1; numRows++) {
              let pos_x = numRows-1
              

              let lineBoard = ''
              let numRowsString = String(numRows-1) 
              if (numRows == 0){
                     console.log("┌─────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐")
                     lineBoard ="│ (index) |"
                     for(let numCols = 0; numCols < COLS; numCols++){
                     
                            let numColsString = String(numCols)        
                            lineBoard += '   '+numColsString+'  │'
                     } 
                     console.log(lineBoard)
                     console.log("├─────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤")      
              }else{              
                     for(let numCols = 0; numCols < COLS+1; numCols++){
                            let pos_y = numCols-1

                            if (numCols == 0){                                   
                                   lineBoard += '|    '+numRowsString+'    │'
                            } else{
                                   const location = String(pos_x) + String(pos_y) 
                                   const element = positions_Play.find(val => val == location)
                                   if (element == undefined){ 
                                          lineBoard += " '"+FIGURES[0] +"' │"
                                   }else{
                                          figureImg = searchFigures(Player,location)    
                                          lineBoard += " '"+figureImg+"' │"

                                   }
                                   
                            } 
                                   
                     }
                     console.log(lineBoard)                 
              }      
       }
       console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       
}




function searchFigures(Player,location){
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