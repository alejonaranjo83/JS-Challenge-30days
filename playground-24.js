// En este desafío debes crear un sistema de carrito de compras.

// Dentro del playground tendrás un archivo product.js que será la clase base y será abstracta. Deberás crear las clases hijas Article y Service que extenderán de Product.

// La clase Article deberá implementar el método addToCart() de manera que retorne el string "Agregando x unidades del artículo x al carrito", donde x es el nombre y la cantidad del producto. Por otro lado, la clase Service deberá implementar el método addToCart() de manera que retorne el string "Agregando el servicio x al carrito", donde x es el nombre del servicio.

// Además, debes crear la clase Cart que será el carrito de compras y tendrá los siguientes métodos:

// addProduct(product) este método agregará un producto al final de la lista de compras y deberá llamar al método addToCart() de cada producto o servicio.
// deleteProduct(product) este método recibirá un producto y lo eliminará de la lista de productos
// calculateTotal() este método calculará el total de los productos agregados y lo devolverá.
// getProducts() este método devolerá el array de los productos que contiene el carrito.
// Ejemplo 1


// Input:

// const book = new Article("Libro", 100, 2);
// const course = new Service("Curso", 120, 1);

// const cart = new Cart();
// cart.addProduct(book);
// cart.addProduct(course);
// cart.calculateTotal();


// Output:

// Agregando 2 unidades del artículo Libro al carrito
// Agregando el servicio Curso al carrito
// 320

// Ejemplo 2


// Input:

// const book = new Article("Libro", 100, 2);
// const course = new Service("Curso", 120, 1);

// const cart = new Cart();
// cart.addProduct(book);
// cart.addProduct(course);
// cart.deleteProduct(book);
// cart.calculateTotal();


// Output:

// Agregando 2 unidades del artículo Libro al carrito
// Agregando el servicio Curso al carrito
// 120




// Trying to run into my notebook, requires to use this one
// import { Product } from "./playground-24_2";



// Only run within the playground:
import { Product } from "./product";



class Article extends Product {//a class will be created inheriting other properties class
  addToCart() {  
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;//a method that indicates which and how many units of a single product have been created
  }
}

class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

class Cart {
    constructor() {
      this.compras = [];//an empty array that will receive products to be purchased
    }

    addProduct(product) {//a method that receives a product as an argument
      product.addToCart();//calls the "addToCart" method
      this.compras.push(product);//add this product to the array
    };

    deleteProduct(product) {//the array will be redefined without incluing the searched item
      this.compras = this.compras.filter((item) => item.name !== product.name);
    };

    calculateTotal() {
        const total = this.compras.reduce(//create a new constant that will store the result of the reduce method that will go through each element of the array.
          (sum, currentItem) => //Inside "reduce" there´s a callback function with 2 parameters: an acumulator (sum) that initializes with 0 and the current value. The current value is the result of multiplying the price with the quantity of each product.
          currentItem.price * currentItem.quantity + sum, 0
        );
        return total;
    };

    getProducts() {
        return this.compras;
    };
}