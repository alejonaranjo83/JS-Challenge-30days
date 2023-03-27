// En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

// Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:

// Ejemplo 1:


// Input:

// const array = [1,2,3,4,5,6]

// array.myFilter(num => num % 2 === 0)

// Output: [2,4,6]

// Ejemplo 2:


// Input:

// const arr = [
//   {
//     name: "Juan",
//     age: 10,
//   },
//   {
//     name: "Pedro",
//     age: 20,
//   },
//   {
//     name: "Maria",
//     age: 30,
//   },
// ];

// array.myFilter((person) => person.age > 18)

// Output: [
//   {
//     name: "Pedro",
//     age: 20,
//   },
//   {
//     name: "Maria",
//     age: 30,
//   },
// ]


function arrayModified() {
    Array.prototype.myFilter = function (func) {//method to be added to the Array prototype. The function "myFilter" is going to receive another function as an argument. That function will be specified by the user when invoking ".myFilter" method 
        const filteredArr = [];//array that will receive the elements after applying the filter

        for (let i = 0; i < this.length; i++) {//loop that will go through each element of the original array (the one on which the filter is being applied). Each iteration evaluates whether the actual element meets the condition
            const element = this[i];
            if (func(element)) {//if the element meets the condition...
                filteredArr.push(element);//it will be pushed into the filtered array
            };
        }
        // console.log(filteredArr);
        return filteredArr;
    }
}




//Input

const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)



const arr = [
      {
        name: "Juan",
        age: 10,
      },
      {
        name: "Pedro",
        age: 20,
      },
      {
        name: "Maria",
        age: 30,
      },
    ];

arr.myFilter((person) => person.age > 18)