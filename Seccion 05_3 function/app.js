/* Crear un algoritmo, que permita determinar
   la calificación en letra de un alumno

   Si la nota se encuenta entre  100 a 90 = A
   Si la nota se encuenta entre   89 a 80 = B
   Si la nota se encuenta entre   79 a 70 = C
   Si la nota se encuenta entre   69 a 60 = D
   Si la nota es inferior a  60 = F
   
*/
function calcularNota(nota){
    let notaLetra = '';
    
    if(nota >= 90){
        notaLetra = "A";
    }else if(nota >=80){
        notaLetra = "B";
    }else if(nota >=70){
        notaLetra = "C";
    }else if(nota >=60){
        notaLetra = "D";
    }else{
        notaLetra = "F";
    }
    
    console.log("Con la nota " + nota + " tienes una calificación "+ notaLetra);
}

calcularNota(100);
calcularNota(80);
calcularNota(55);
