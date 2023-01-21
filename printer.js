// FUNCIONES


export function searchPositions (Player){
    let positionsPlay=[]
    
    for (let key of Object.keys(Player.ships)){
        
        const ship = Player.ships[key]         
        let positionShip = ship.nposition

        
        while(positionShip>0){
            let cordenadas= findStartPosition(positionsPlay)// Buscamos la posición inicial vacía
         
            let posX = cordenadas[0]
            let posY = cordenadas[1]
            let direction  = randomValue(-1,2)
            let validatePosition
            let positionTotal = "00"

            //Revisión de espacio disponible y cogemos posiciones
            if (direction == 0){
                validatePosition = validateHorizontalSpace(positionShip,posX,posY,positionsPlay) // R
                
                 if (validatePosition[0] == "N"){
                    direction = 1
                    validatePosition = validateVerticalSpace(positionShip,posX,posY,positionsPlay)    
                }
            } else{
                validatePosition  = validateVerticalSpace(positionShip,posX,posY,positionsPlay)
                if (validatePosition[0] == "N"){
                    direction = 0    
                    validatePosition  = validateHorizontalSpace(positionShip,posX,posY,positionsPlay)    
                }
            }


            //Validamos posición y guardar en array
            if (validatePosition[0] == "S"){
                positionShip = 0               
                positionTotal = validatePosition[1]
                
                ship.location = positionTotal

                for(const position of positionTotal) {
                    positionsPlay.push(position)                   
                }
                 
       
                
            }
                      
        }        
               
    }

    return positionsPlay

}

function randomValue(max,min){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function validateHorizontalSpace(positionShip,posX,posY,positionsPlay){
    let position=[]
    let nposition = positionShip
    let valido = "S"
    let positionTotal=[]
    let posXnew 
    while(nposition>0){
        if (posX>=5){
            posXnew = posX - nposition
        }else{
            posXnew = posX + nposition
        }

        
        const location = String(posXnew) + String(posY) 
        const element = positionsPlay.find(val => val == location)
        if (element != undefined){ 
            valido = "N"
        }else{
            positionTotal.push(location)
        }
        --nposition 
    }    
    let validatePosition
    return validatePosition=[valido,positionTotal]
}

function validateVerticalSpace(positionShip,posX,posY,positionsPlay){
    let nposition = positionShip
    let valido = "S"
    let positionTotal = []
    let posYnew 
    while(nposition>0){
        if (posY>=5){
            posYnew = posY - nposition
        }else{
            posYnew = posY + nposition
        }

        
        const location = String(posX) + String(posYnew) 
        const element = positionsPlay.find(val => val == location)
        if (element != undefined){ 
            valido = "N"
        }else{
            positionTotal.push(location)
        }
        --nposition
        
    }    
    let validatePosition
    return validatePosition=[valido,positionTotal]
}

export function findStartPosition(positionsPlay){
    let valido = "N"
    let posX=0
    let posY=0
    while(valido=="N"){
        posX =   randomValue(-1,10)
        posY =   randomValue(-1,10)

        const location = String(posX) + String(posY)
        const element = positionsPlay.find(val => val == location)

        if (element == undefined){
            valido  ="S"
        }            
   }

   return [posX,posY]

}

export function printHeading(text) {
    const pad = '='.repeat(text.length)
    console.log(`==========${pad}==========`)
    console.log(`========= ${text} =========`)    
    console.log(`==========${pad}==========`)
}

export function printLine(...text) {
    console.log(...text)
}
