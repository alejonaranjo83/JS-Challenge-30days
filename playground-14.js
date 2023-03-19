// En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando async/await.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

// Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

// Ejemplo:

// Input:
// await runCode();

// Output:
// ["Task 1", "Task 2", "Task 3"]

import { doTask1, doTask2, doTask3 } from './tasks'; //import these functions from that file

export async function runCode() { //this is going to be an asynchronous function
    const rta1 = await doTask1(); //call the function doTaskX, wait until the task is completed and after that, assign its result to the constant rtaX
    const rta2 = await doTask2();
    const rta3 = await doTask3();  

    return [rta1, rta2, rta3] //return the results after executing each function
}
