// En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

// Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

// Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: map, filter, join, push, pop, shift, y unshift.

// No podrás usar los corchetes [], aquí entenderás porque los arrays se consideran objetos ¡Buena suerte!

// Ejemplo 1:


// Input:

// const myArray = new MyArray()

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);

// console.log(myArray.data)

// Output: { 0: 1, 1: 2, 2: 3 }

// Ejemplo 2:


// Input:

// const myArray = new MyArray()

// myArray.push("Platzinauta");
// myArray.unshift("Hola!")

// console.log(myArray.data)

// Output: { 0: "Hola!", 1: "Platzinauta" }


class MyArray {
    constructor() {
        // Tu código aquí 👈
        this.length = 0; //attribute that will represent the length of the array
        this.data = {}; //object that will store the elements of the array
    }
    
    push(item) {//push method receives "item" as a parameter
        // Tu código aquí 👈
        this.data[this.length] = item; // Add the element at the end of the object "data"
        this.length++; // Increase the length by 1
        return this.dataToArray(); // return an array with the values of the object data. For that, a new function is defined: "dataToArray"
    }
  
    dataToArray() {
          return Object.values(this.data);//convert the values of the object "data" into an array
    }


    map(func) {//this method receives a function specified by the user
        // Tu código aquí 👈
        const mappedArray = new MyArray();//an empty array is created, using recursion within the same class

        for (let i = 0; i < this.length; i++) {//go through each element of the array
            const currentItem = this.data[i];
            const newItem = func(currentItem);//create a new item using the function of the parameter over the current item of the array
            mappedArray.push(newItem)//add the new item to the previously created array
        }
        return mappedArray;//return the new array with the transformed elements
    }
  
    filter(func) {//receives a function as a parameter
        // Tu código aquí 👈
        const filteredArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            const currentItem = this.data[i];
            
            if (func(currentItem)) {//if the current item meet the condition established in the call back function...
                filteredArray.push(currentItem)//then, add it to the filtered array
            } 
        }
        return filteredArray;//returns an array with the elements that meet the condition
    }
  
    pop() {//method for deleting the last element of an array
        // Tu código aquí 👈
        if (this.length === 0) {//if there are no elements in the array...
            return undefined;
        }

        const lastItem = this.data[this.length - 1];//get the last element of the object (as the elements start to count on 0, this subtraction needs to be done)
        delete this.data[this.length - 1];//delete the last item of the object
        this.length--;//reduce the length by one unit
        return lastItem;//returns the last item deleted
    }
  
    // join(character = ",") {
    //   // Tu código aquí 👈
    // }
  
    // shift() {
    //   // Tu código aquí 👈
    // }
  
    // unshift(item) {
    //   // Tu código aquí 👈
    // }
  }




  // Input1:

const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);

console.log(myArray.data)

myArray.map((num) => num * 2)
console.log(myArray.map((num) => num * 2))

const filteredArray = myArray.filter((item) => item % 2 === 0);
console.log(filteredArray.dataToArray());

console.log(myArray.pop()); 
console.log(myArray.dataToArray());

// Input2:

// const myArray = new MyArray()

// myArray.push("Platzinauta");
// myArray.unshift("Hola!")

// console.log(myArray.data)