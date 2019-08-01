/*
  Crea function para determinar 
  la calificación de un alumno en letras.

*/
function calcularNota(nota) {
  if(nota >= 90) {
    notaLetra = 'A';
  } else if(nota >= 80) {
    notaLetra = 'B';
  } else if(nota >= 70) {
    notaLetra = 'C';
  } else if(nota >= 60) {
    notaLetra = 'D';
  } else {
    notaLetra = 'F';
  }
  console.log('La nota es ' + nota + ', equivale a una ' + notaLetra);
}

calcularNota(100);
calcularNota(80);
calcularNota(59);