// Implementa la lógica para proteger un objeto de cambios.

// En este desafío, debes implementar la lógica de la función llamada protectDog que reciba como parámetro los datos de un perro como objeto.

// La función debe crear una copia del objeto original utilizando el método Object.assign, almacenarla en una variable y luego congelar la copia utilizando el método Object.freeze para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

// De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.

// Ejemplo 1:

// Input: protectDog({
//   name: "Romeo",
//   age: 3,
//   owner: { name: "Victor", phoneNumber: "555-555-5555" },
//   favoriteFood: ["pollito", "croquetas"],
//   activities: ["jugar", "caminar"],
// })

// Output:
// protectedDog.name = "Toro"
// protectedDog.name // "Romeo"

// Ejemplo 2:

// Input: protectDog({
//   name: "Romeo",
//   age: 3,
//   owner: { name: "Victor", phoneNumber: "555-555-5555" },
//   favoriteFood: ["pollito", "croquetas"],
//   activities: ["jugar", "caminar"],
// })

// Output:
// protectedDog.owner.name = "Pedro"
// protectedDog.owner.name // "Victor"



function protectDog(dog) {
    // Copy the original object
    const dogCopied = Object.assign({}, dog);
    // dogCopied.oe = 123;
    // console.log(dogCopied);

     // Freezing the copy avoiding to change his properties
     Object.freeze(dogCopied)

    for(const key in dogCopied) {//loop to go through each property of the object
        const value = dogCopied[key];

        if(typeof value === "object") {//if the value of the property is an object...
            Object.freeze(value);//freeze that object as well
        }
    }
    return dogCopied
}






// Input: 
protectDog({
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
})