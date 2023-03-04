// Playground #1 (Clase 4)

// En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.

// Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution.

// Por ejemplo:

// Dados los siguientes llamados a la función solution:

// solution(1)
// solution("Dieguillo")
// solution(true)

// Debes obtener los siguientes resultados:

// "number"
// "string"
// "boolean"

function solution(valor) {
    // Escribe tu código aquí 👈
    if(typeof valor === "number") {
        console.log("This is a number");
        return "number";
    } else if(typeof valor === "string") {
        console.log("This is a string");
        return "string";
    } else if(typeof valor === "boolean") {
        console.log("This is a boolean");
        return "boolean";
    } else {
        alert("asdasd")
    }
}

  



solution(1)
solution("Dieguillo")
solution(true)