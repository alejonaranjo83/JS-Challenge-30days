// En este desafío tendrás que procesar una lista de compras.

// Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original de la siguiente manera

// Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
// Multiplicar el precio del producto por su cantidad
// Eliminar el atributo quantity una vez hecho lo anterior.
// Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.

// Ejemplo 1

// Input:
// const shoppingList = [
//   { name: "pan", price: 20, quantity: 2 },
//   { name: "leche", price: 25, quantity: 1 },
//   { name: "oferta manzanas", price: 10, quantity: 3 },
// ]

// processShoppingList(shoppingList)

// Output: 89

// Ejemplo 2

// Input:
// const shoppingList = [
//   { name: "pan", price: 20, quantity: 2 },
//   { name: "leche", price: 25, quantity: 1 },
//   { name: "oferta manzanas", price: 10, quantity: 3 },
// ]

// processShoppingList(shoppingList)

// console.log(shoppingList)

// // El array original debe ser modificado

// Output:
// [
//   { name: "pan", price: 40 },
//   { name: "leche", price: 25 },
//   { name: "oferta manzanas", price: 24 },
// ]



function processShoppingList(list) {
    // 1. If the name of the product includes "oferta", a discount of 20% should be applied to the price of the product
    const offer = "oferta"; //string to be searched in the array of objects
    list.forEach((product) => { //iterate over each object of the array
        for(let key in product) { //search in the name of the object property
            if(typeof product[key] === "string" && product[key].includes(offer)){ //if that name is a string and includes the searched string...
                product.price = product.price * 0.8; //apply a discount of 20% in the price
            }
        }
    })


    // 2. Erase the attribute "quantity" after multiplying it by the price
    for (let i = 0; i < list.length; i++){
        list[i].price = list[i].price * list[i].quantity;
        delete list[i].quantity;
    }
    // console.log(list)



    // 3. Return the total with the sum of all the products with the modified price
    const total = list.map((product) => product.price).reduce((a, b) => a + b); //create a new array with the values of the price property of each object (map). Then add up all the values (reduce)
    // console.log(list)

    return total
}


// Input:
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)