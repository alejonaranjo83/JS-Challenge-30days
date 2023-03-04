// Playground #1

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