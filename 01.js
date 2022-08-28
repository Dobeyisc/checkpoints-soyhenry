/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
var input = [1 ,'hola', 2];

function soloNumeros(array){
  var soloenteros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
//       soloenteros[i] = array[i];
       soloenteros.push(array[i]);
    }; 
  }
 return soloenteros;
}  

console.log(soloNumeros(input));

  

// La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:


// No modifiques nada debajo de esta linea //


module.exports = soloNumeros