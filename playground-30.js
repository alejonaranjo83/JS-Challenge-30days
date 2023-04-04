// En este reto, deberás utilizar el patrón decorator para personalizar productos en una tienda.

// La clase abstracta de la cual interactuarán los decoradores se encuentra en el archivo product.js el cual puedes ver dentro del sistema de archivos del playground.

// La tienda ofrece productos con un precio base y una descripción, pero a veces los clientes quieren agregar extras, como una garantía o un seguro de envío. Tu objetivo es implementar el patrón decorator para permitir a los clientes personalizar sus productos con estos extras.

// Debes implementar la lógica de las siguientes clases (cada una con su respectivo archivo dentro del coding playground):

// BasicProduct(price, product): heredará de la clase Product y retornará el nombre del producto al implementar el método getDescription.
// WarrantyDecorator(basicProduct): heredará de Product, pero deberá sumar 20$ al precio final y agregarle el string "con garantía" a la descripción del producto.
// ShippingInsuranceDecorator(basicProduct): heredará de Product e igual que WarrantyDecorator, sumará 20 al precio final y agregará el string "con seguro de envío" a la descripción del producto.
// Ejemplo 1:

// Input:
// const basicProduct = new BasicProduct(100, "Camisa de algodón");
// const withWarranty = new WarrantyDecorator(basicProduct);
// const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
// console.log(withShippingInsurance.getPrice());
// console.log(withShippingInsurance.getDescription());
// Output:
// 140
// "Camisa de algodón con garantía con seguro de envío"

// Ejemplo 2:

// Input:
// const basicProduct = new BasicProduct(5000, "Refrigerador");
// const withWarranty = new WarrantyDecorator(basicProduct);
// console.log(withWarranty.getPrice());
// console.log(withWarranty.getDescription());
// Output:
// 5020
// "Refrigerador con garantía"

// Ejemplo 3:

// Input:
// const basicProduct = new BasicProduct(5000, "Refrigerador");
// const withShippingInsurance = new ShippingInsuranceDecorator(basicProduct);
// console.log(withShippingInsurance.getPrice());
// console.log(withShippingInsurance.getDescription());
// Output:
// 5020
// "Refrigerador con seguro de envío"




// This code uses the design pattern "Decorator". It creates a basic class and three sub classes that extend the basic one
class Product {//basic class that receives a price as parameter
    // Este código no debe ser editado ❌
    constructor(price) {
      this.price = price;
    }
  
    getPrice() {//there are two methods within it
      return this.price;//this one returns the price
    }
  
    getDescription() {//the other throws an error indicating what should be done
      throw new Error("Este método debe ser implementado en las subclases");
    }
}
  

class BasicProduct extends Product {
    constructor(price, description) {//this is the first sub class. It receives a price and description as parameters
      // Tu código aquí 👈
      super(price);//the price is initialized calling the constructor of the super class
      this.description = description;//the description is stored in other property
    }
  
    getDescription() {//a method is implemented in order to obtain the description
      // Tu código aquí 👈
      return this.description
    }
}


class WarrantyDecorator extends Product {
    constructor(product) {//this sub class receives an instance of the Product class
      // Tu código aquí 👈
      super();//calls the constructor of the super class without parameters
      this.product = product;//stores the received instance in this variable
      this.priceWarranty = 20;//creates an additional variable to store the price of the warranty
    }
  
    getPrice() {//a method that returns the price incluiding the warranty
      // Tu código aquí 👈
      return this.product.getPrice() + this.priceWarranty
    }
  
    getDescription() {//a method that returns the description adding a string
      // Tu código aquí 👈
      return `${this.product.getDescription()} + con garantía`;
    }
}


class ShippingInsuranceDecorator extends Product {//this sub class does something similar to the previous one, but varying a few things
    constructor(product) {
      // Tu código aquí 👈
      super();
      this.product = product;
      this.shippingPrice = 20;
    }
  
    getPrice() {
      // Tu código aquí 👈
      return this.product.getPrice() + this.shippingPrice;
    }

    getDescription() {
      // Tu código aquí 👈
      return `${this.product.getDescription()} + con seguro de envío`;
    }
}//in a nutshell, this code allows to create basic products and decorate them with warranty or shipping insurance, adding additional functions to the basic products without modifying the base class






// Input 1:
const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
Output:
140
"Camisa de algodón con garantía con seguro de envío"