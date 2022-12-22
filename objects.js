// Creacón de objetos 

//Creador de Jugador
function Player(name){
    this.name   = name
    this.points = 0
    this.win    = function() {console.log( `The Winner is ${this.name}` )}
    this.ships  = {
        lancha1 : ship("lancha",1,"🚤"),
        lancha2 : ship("lancha",1,"🚤"),
        lancha3 : ship("lancha",1,"🚤"),

        crucero1: ship("crucero",2,"⛵"),
        crucero2: ship("crucero",2,"⛵"),
        crucero3: ship("crucero",2,"⛵"),

        submarino1 : ship("submarino",3,"🚇"), 
        submarino2 : ship("submarino",3,"🚇"), 

        buque1 : ship("buque",4,"🚢"), 

        portaaviones1 : ship("portaaviones",5,"🛫") 

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