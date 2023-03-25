// En este desafío, tendrás que ordenar una lista de productos.

// Tu tarea es implementar la lógica de la función sortByAvailabilityAndPrice. Esta función recibirá un array de objetos que representan productos, y devolverá una copia ordenada de dicho array.

// El ordenamiento se realizará siguiendo dos criterios:

// Primero, los productos disponibles en inventario serán colocados al principio de la lista.
// Luego, los productos serán ordenados por su precio, de manera ascendente.
// Es importante destacar que la lista original no sufrirá ninguna modificación, y que la función devolverá una nueva lista con los cambios mencionados.

// Ejemplo

// Input:

// const products = [
//   { name: "product1", price: 10, inStock: true },
//   { name: "product2", price: 20, inStock: false },
//   { name: "product3", price: 15, inStock: true },
//   { name: "product4", price: 5, inStock: false },
// ]

// sortByAvailabilityAndPrice(products)

// Output:
// [
//   { name: "product1", price: 10, inStock: true },
//   { name: "product3", price: 15, inStock: true },
//   { name: "product4", price: 5, inStock: false },
//   { name: "product2", price: 20, inStock: false },
// ]



function sortByAvailabilityAndPrice(products) {
    const sorted = products.slice(); //array that will be shown at the end to the user, preventing from modifying the original array
    
    sorted.sort((a, b) => { //sort the array using a compare function
        if (a.inStock && !b.inStock) { //1st thing to be compared is availability: if "a" is available (true) and "b" is not
            return -1; //a negative number indicates that "a" must be shown before "b"
        } else if (!a.inStock && b.inStock) { //if "a" isn´t available but "b" is, then "b" must be shown before "a"
            return 1;
        } else { //if both have the same availability, they should be ordered according to their price
            return a.price - b.price;
        }
    })

    return sorted
}




// Input:

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]


sortByAvailabilityAndPrice(products)