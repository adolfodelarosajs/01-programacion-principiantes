

//Clase Carro
class Carro {
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;
    }
    encenderCarro(){
        if(this.encendido){
            console.error('El carro ya estaba encendido');
        }else{
            this.encendido = true;
            console.log('El carro esta encendido');
        }
        return this; //Retorna la instancia de la clase (lo pinta en la consola)
    }

    realizarViaje(consumo){
        /*if(this.encendido){
            if(consumo > this.gasolina){
                console.error('Imposible realizar el viaje, no te queda suficiente gasolina');
            }else{
                this.gasolina = this.gasolina - consumo;
                console.log('Le queda ' + this.gasolina + ' litros de gasolina');
            }
        }else{
            console.error('El carro no esta encendido');
        }
        return this;//Retorna la instancia de la clase (lo pinta en la consola)
        */

        if(!this.encendido) return console.error('El carro no esta encendido');

        if(consumo > this.gasolina) return console.error('Imposible realizar el viaje, no te queda suficiente gasolina');

        this.gasolina = this.gasolina - consumo;
        console.log('Le queda ' + this.gasolina + ' litros de gasolina');
    }
}

let carro = new Carro( 'Mazda', 'Sedan', 2);
console.log(carro);
