// Ciclo "for"
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// Ciclo "for-in"... recorrer propiedades en un objeto
const alejo = {
    name: "Alejandro",
    age: 39,
    role: "Frontend developer",
    user: "alejonaranjo83",
}

for (const values in alejo) {
    console.log(alejo[values])
}

// Ciclo "for-of"... recorrer elementos de una colección como un array
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
    console.log(element)
}

// Ciclo "while"
let i = 1;
while (i <= 10) {
    console.log(`iteración # ${i}`);
    i++;
}

// Ciclo "do-while"
let y = 1;
do {
    console.log(y);
    y++;
} while (y <= 10);




// PLAYGROUND #5
// En este desafío, debes dibujar un triángulo isósceles usando bucles.

// Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

// Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: printTriangle(5, "*")
// Output:
//     *
//    **
//   ***
//  ****
// *****

// Ejemplo 2:

// Input: printTriangle(6, "$")
// Output:
//      $
//     $$
//    $$$
//   $$$$
//  $$$$$
// $$$$$$



// Esta solución corre en mi consola, pero no en el playground de Platzi
function printTriangle(size, character) {
    for (let i = 0; i < size; i++) { //primer ciclo que controla la cantidad de líneas a imprimirse
        let line = ''; //linea en ppio está vacía
        for (let j = 0; j < size; j++) { //segundo ciclo, anidado dentro del anterior, el cual controla la cantidad de caracteres en cada línea
            if(j < size - i -1){ //si "j" es menor que: "size" - i -1... entonces 
                line += ' '; //debe imprimir un espacio en blanco. '+=' es un operador que asigna y adiciona en la misma operación
            } else { //sino es así ("j" es mayor o igual q la condición anterior), entonces... 
                line += character; //debe imprimir el caracter especificado al invocar la fxn
            };
        }
        console.log(line); //imprima la línea creada previamente
    }
}

printTriangle(5, "#")
printTriangle(8, 'p')



// Esta sln la tomé de un compañero y corrió bien en el playground, pero no me da el resultado que espero ver en mi consola

function printTriangle(size, character) {
    let triangle = ''; //cree una variabe q en ppio estará vacía
    for(let i=1; i<=size; i++){ //genere un primer ciclo para controlar la cantidad de líneas/filas del triangulo
        for(let j=1; j<=size; j++){ //genere un 2do ciclo para controlar las columnas en cada fila
            if(j <= (size - i)){ // mientras la cantidad de caracteres sea menor que: tamaño menos "i", es decir, si está en la zona vacía del triangulo....
                triangle += ' ' //agregue un espacio en blanco a esa fila de la variable triangle
            } else { //sino...
                triangle += character //agregue el caracter a esa fila
            }
        }
        if(i < size){ //si el número de la fila es inferior al tamaño...
            triangle += '\n' //agregue un salto de línea a la variable triangle para construir siguiente línea
        }
    }
    // console.log(triangle)
    return triangle //devuelva la variable creada con sus diferentes filas
}

printTriangle(5, "#")
printTriangle(8, 'p')







// Chat GPT3... resolviéndolo como si fuera un array:


function printTriangle(size, character) {
    let miArray = new Array(size); //creo un array con una cantidad de elementos especificada al invovar la fxn
    miArray.fill(" "); //los elementos del array están vacíos
  
    for (let i = 0; i < size; i++) {
      miArray.push(character); //en c/iteración del array, introduzco el caracter especificado al invocar la fxn
      miArray.shift(); //elimino el primer elemento del array
      console.log(miArray); // imprimo el array en la consola
    }
}

printTriangle(3, '&');