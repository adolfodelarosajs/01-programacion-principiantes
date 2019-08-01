//Arreglo de Objetos
let persona1 = {
	nombre: 'Fernando',
	edad: 32,
}

let persona2 = {
	nombre: 'Melissa',
	edad: 27,
}

let persona3 = {
	nombre: 'Juan',
	edad: 40,
}

let personas = [persona1, persona2, persona3];

console.log(personas); //(3) [{…}, {…}, {…}]
						//0: {nombre: "Fernando", edad: 32}
						//1: {nombre: "Melissa", edad: 27}
						//2: {nombre: "Juan", edad: 40}

for( let i = 0; i < personas.length; i++){
	console.log(`${ personas[i].nombre } -- ${ personas[i].edad }`);
}