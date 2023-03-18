// Playground #13 - Class 37

// En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando promesas.

// Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

// Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

// Ejemplo:

// Input:
// runCode()
// .then(response => console.log(response));

// Output:
// ["Task 1", "Task 2", "Task 3"]


import { doTask1, doTask2, doTask3 } from './tasks'; //3 asynchronous tasks that will be performed from a file

export function runCode() {
    const strings = []; //array that will store answers from the previous tasks
    return doTask1()
    .then((rta1) => { //function that chains the call to promises
        strings.push(rta1); //add that answer to the array
        return doTask2(); //execute this function
    })
    .then((rta2) => {
        strings.push(rta2);
        return doTask3();
    })
    .then((rta3) => {
        strings.push(rta3);
        return strings; //final result that will show the function
    })
}