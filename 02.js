/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
let numeros = [1, 3]

console.log(suma_todos(numeros));

function suma_todos (numeros) {
  let inicio = numeros[0];
  let fin = numeros[1];
  let suma = 0;
  
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  
  return suma;
}

  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  


// No modifiques nada debajo de esta linea //

module.exports = sumaTodos