
//Objeto carro1
let carro1 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3
}

//Clase Carro
class Carro {
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
    }
}

let carro2 = new Carro( 'Mazda', 'Sedan', 2);

console.log(carro1);
console.log(carro2);