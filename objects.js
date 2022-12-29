// OBJETOS

//Creador de Jugador
function Player(name){
    this.name   = name
    this.points = 0
    this.win    = function() {console.log( `The Winner is ${this.name}` )}
    this.ships  = {
        
        portaaviones1 : new ship("portaaviones",5,"🛫"), 

        buque1 : new ship("buque",4,"🚢"), 
        
        submarino1 : new ship("submarino",3,"🚇"), 
        submarino2 : new ship("submarino",3,"🚇"), 
        
        crucero1: new ship("crucero",2,"⛵"),
        crucero2: new ship("crucero",2,"⛵"),
        crucero3: new ship("crucero",2,"⛵"),
        
        lancha1 : new ship("lancha",1,"🚤"),
        lancha2 : new ship("lancha",1,"🚤"),
        lancha3 : new ship("lancha",1,"🚤")
        
        

    }
   
    

    return this
}


function ship(name,nposition,img){
    this.name      = name
    this.nposition = nposition
    this.img       = img 
    this.location  = []

    return this
}








module.exports = {
    "Player": Player
}