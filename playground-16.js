// En este desafío, tendrás la tarea de agrupar una lista de productos según su categoría.

// Para ello, debes implementar la lógica de la función groupProducts que recibirá dos parámetros: products y category.

// El primer parámetro products es una lista de objetos que representan cada producto y contienen las propiedades: name, category y price. El segundo parámetro category específica a qué categoría se filtrarán los productos.

// La función debe retornar un objeto con dos propiedades: products que contiene la cadena de texto con los nombres de los productos respetando el orden en el que llegan separados por comas, y totalPrice que contiene la suma total de los precios.

// Ejemplo 1:

// Input:
// const products = [
//   { name: "Smartphone", category: "Electronics", price: 800 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Shirt", category: "Clothing", price: 50 },
//   { name: "Pants", category: "Clothing", price: 100 },
// ];

// groupProducts(products, "Electronics")

// Output: {
//   products: "Smartphone, Laptop",
//   totalPrice: 2000,
// }

// Ejemplo 2:

// Input:
// const products = [
//   { name: "Smartphone", category: "Electronics", price: 800 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Shirt", category: "Clothing", price: 50 },
//   { name: "Pants", category: "Clothing", price: 100 },
// ];

// groupProducts(products, "Clothing")

// Output: {
//   products: "Shirt, Pants",
//   totalPrice: 150,
// }





function groupProducts(products, category) {
    // 1. Create arrays that will store the answers to show the user
    let filteredProducts = [];
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        if(products[i].category === category){ //if the value of the products property "category" is the same than the category that the user invoqued as a parameter
            filteredProducts.push(products[i].name); //fill the array with the name of those products
            totalPrice += products[i].price; //update the variable "totalPrice" adding the price of each product
        };
    }
    
    return{
        products: filteredProducts.join(", "), //show a string with the name of the elements of the array, not an array
        totalPrice: totalPrice, //show the total after adding the prices of the filteredProducts
    }
}



// Input:
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

// groupProducts(products, "Electronics")
groupProducts(products, "Clothing")