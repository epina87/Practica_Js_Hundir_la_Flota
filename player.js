// OBJETOS

//module.exports = {
//    "Player": Player
//}

//Creador de Jugador
export function player(name,cod){
    this.name   = name
    this.cod    = cod
    this.points = 0
    this.win    = function() {console.log( `The Winner is ${this.name}` )}
    this.ships  = {
        
        portaaviones1 : new ship("portaaviones1",5,"🛫"), 

        buque1 : new ship("buque1",4,"🚢"), 
        
        submarino1 : new ship("submarino1",3,"🚇"), 
        submarino2 : new ship("submarino2",3,"🚇"), 
        
        crucero1: new ship("crucero1",2,"⛵"),
        crucero2: new ship("crucero2",2,"⛵"),
        crucero3: new ship("crucero3",2,"⛵"),
        
        lancha1 : new ship("lancha1",1,"🚤"),
        lancha2 : new ship("lancha2",1,"🚤"),
        lancha3 : new ship("lancha3",1,"🚤")
    }
    this.shooter={}
   
     

    return this
}


function ship(name,nposition,img){
    this.name      = name
    this.nposition = nposition
    this.img       = img 
    this.location  = []

    return this
}





