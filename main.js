class Dado {
    tirarDado(){
        return Math.ceil(Math.random() * 100)
    }
}
class Competidor {
    constructor (nombre){
        this.nombre = nombre 
        this.posicion = 0
        this.dado = new Dado
    }
}

class Liebre extends Competidor {
    constructor(nombre,posicion,dado){
        super({nombre,posicion,dado})
        this.nombre = nombre 
    }
    acciones(){
        let final = this.dado.tirarDado()

        if(final <= 10){
            this.posicion -= 12
        } else if (final <= 25){
            this.posicion -= 2
        }else if (final <= 45){
            this.posicion += 9
        }else if (final <= 65 ){
            this.posicion += 0
        }else if (final <= 100){
            this.posicion += 1
        }
    }
}

class Tortuga extends Competidor{
    constructor(nombre,posicion,dado){
        super({nombre,posicion,dado})
        this.nombre = nombre
    }
    acciones(){
        let final = this.dado.tirarDado()

        if(final <= 50){
            this.posicion += 3
        }else if (final <= 70){
            this.posicion -=6
        }else if (final < 100){
            this.posicion += 1
        }
    }
}

let tortuga = new Tortuga ('tortuga')
let liebre =  new Liebre ('liebre')

while (tortuga.posicion <= 90 && liebre.posicion <= 90){
    tortuga.acciones();
    liebre.acciones();

    console.log(`${liebre.nombre} se movio a = ${liebre.posicion} y ${tortuga.nombre} se movio a = ${tortuga.posicion}`);
}
if (liebre.posicion >= 90 && tortuga.posicion >= 90){
    console.log ("ambos competidores empatataron")
}else if (liebre.posicion >= 90){
    console.log(`${liebre.nombre} gano`);
}else if (tortuga.posicion >= 90){
    console.log(`${tortuga.nombre} gano`);
}
