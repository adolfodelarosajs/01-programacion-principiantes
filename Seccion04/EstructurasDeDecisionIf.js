/*
Crear un programa que basado en la calificación de un alumno,
imprima si aprueba o no la matería.
Aprueba a partir de 60, si tiene nota menor de 50, imprimir el mensaje "Por favor estudie más"
*/

let nota = 40;

if(nota >= 60) {
  console.log('La nota es ' + nota + ', el alumno aprueba la asignatura');
} else if(nota > 50) {
    console.log('La nota es ' + nota + ', el alumno NO aprueba la asignatura');
} else {
  console.log('La nota es ' + nota + ', por favor estudie más!!!');
}
