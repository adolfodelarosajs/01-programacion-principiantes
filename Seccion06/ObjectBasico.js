
let persona = {
	nombre: 'Fernando',
	edad: 32,
	estatura: 1.79
}

function describirPersona( p) {
	console.log( `${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura}`); //Fernando tiene una edad de 32 y mide 1.79
}

console.log(persona); //{nombre: "Fernando", edad: 32, estatura: 1.79}
console.log(persona.nombre); //Fernando
console.log(persona.edad); //32

describirPersona(persona);
