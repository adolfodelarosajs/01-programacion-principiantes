//Creando un objeto carro1
let carro1 = {
	marca: 'Toyota',
	tipo: 'Sedan',
	puertas: 3,
	creado: 'Hoy'
}

//Creando una clase Carro
class Carro{

	constructor(marca, tipo, puertas){
		this.marca = marca;
		this.tipo = tipo;
		this.puertas = puertas;
		this.creado = 'Hoy'
	}
}

//Instanciando la clase Carro
let carro2 = new Carro('Masda', 'Sedan', 2);

console.log(carro1); //{marca: "Toyota", tipo: "Sedan", puertas: 3, creado: "Hoy"}
console.log(carro2); //Carro {marca: "Masda", tipo: "Sedan", puertas: 2, creado: "Hoy"}
