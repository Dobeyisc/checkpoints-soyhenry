/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  this.nombre= nombre;
      this.edad= edad;
      this.hobbies= hobbies;
      this.amigos= amigos;
}
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  

    addFriend(nombre, edad) {
      var amigo = {nombre, edad}
      this.amigos.push({amigo});
      
    }
    // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.

    addHobby(hobby) {
      this.hobbies.push(hobby);
    }
    // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.

    getFriends() {
      let amigos = [{nombre: 'Sebas', edad: 666},{nombre: 'Juana', edad: 33}];
        
let friends = getFriends(amigos);
        
console.log(friends);
        
function getFriends(amigos) {
    amigos = amigos.map(function (amigo) {
        return amigo.nombre;
    });
          
    return amigos;
}

      

    
    // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']

    getHobbies() {
      console.log(hobbies);
      
    }
    // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']


    getPromedioEdad() {
      const  amigos = [{
        nombre: 'toni',
        edad: 33,
      }, {
        nombre: 'Emi',
        edad: 25
      }];
      
const result = amigos.reduce((acc, curr) => acc + curr.edad, 0) / amigos.length;

console.log(result);

    }

  };

  return Persona;
// Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona