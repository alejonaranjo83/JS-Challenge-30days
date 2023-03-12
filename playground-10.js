// En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

// Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.

// Ejemplo 1:

// Input: myMap([1,2,3,4], (num) => num * 2)

// Output: [2,4,6,8]

// Ejemplo 2:

// Input: myMap([
//   {name: "michi", age: 2},
//   {name: "firulais", age: 6}],
//   (pet) => pet.name)

// Output: ["michi", "firulais"]


function myMap(array,func) { //the user will specify 2 parameters: an array and a function with the desired action
    const finalArray = []; //array that stores the elements created by the function when it iterates through the array

    for (let i = 0; i < array.length; i++) { //go through each element of the array
        const element = array[i]; //store each element into a new constant
        const newElement = func(element); //apply the arrow function specified by the user to each element
        finalArray.push(newElement); //add the result to the array that will be shown to the user
    }
    // console.log(finalArray);
    return finalArray;
}

myMap([1,2,3,4], (num) => num * 2)

myMap([
      {name: "michi", age: 2},
      {name: "firulais", age: 6}],
      (pet) => pet.name)
    




// SLN profe Platzi:
function myMap(array, func) {
    // Creamos el array que retornaremos
    // Inicialmente está vacío 
    const rta = [];
    for (let i = 0; i < array.length; i++) {
      // Luego iteramos por cada elemento del array
      const element = array[i];
  
      // Y lo vamos pasando al array vacío después de ejecutar 
      // la función sobre cada elemento del array
      rta.push(func(element));
  
      // Es importante recalcar que en ningún momento modificamos el array original 
    }
  
    // Al final lo retornamos
    return rta;
  }
  








// Creating my own "map" function, only for "doubling":
function myMap(array) {
    // let arr = array;
    // let func = function() {

    // }
    for (let i = 0; i < array.length; i++) {
        let doubled = array[i] * 2;
        console.log(doubled);
    }
};

myMap([1,2,3,4])