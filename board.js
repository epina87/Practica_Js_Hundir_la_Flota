// filas del tablero
const ROWS = 10
// columnas del tablero
const COLS = 10
// figuras disponibles para las cartas
const FIGURES = ['⚓']

let board = []

// for(let figure of FIGURES) {
   
//     for (let j = 0; j < 2; j++) {    
//         board.push(figure) 
//     }
// }


// for(let i = 0; i < ROWS; i++) {
//         // una fila cualquiera
//     let row = []
//       // por cada columna
//      for(let j = 0; j < COLS; j++) {
//             //console.log(j, i)
//            row[j] = FIGURES[0]
//         }
//         board[i] = row
//  }


 // Función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
// function printBoard(board) {
//        for(let i = 0; i < ROWS; i++) {
//            let line = ''
//            for(let j = 0; j < COLS; j++){
//                // line = line + ' '
//                line += board[i * COLS + j] // equivale a line = line + ' '
//            }
//            console.log(line)
//        }
//    }

// printBoard(board) 

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
                            lineBoard += '  '+FIGURES[0] +'  │'
                     } 
                               
              }
              console.log(lineBoard)                 
       }      
}
console.log("└─────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘") 
       



console.log('the board', board)