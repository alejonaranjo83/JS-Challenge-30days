// En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo en JavaScript.

// Se debe crear una clase base llamada Pay que contenga un único método llamado makePay. Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades

// realized: true
// quantity: $cantidadAPagar
// Además, se deben crear también las clases PayPal, Card y Cash, donde cada una debe heredar de la clase Pay.

// La clase PayPal debe recibir un email en el constructor y el método makePay debe agregar las propiedades:

// platform: "PayPal"
// email: $EmailRecibido.
// La clase Card recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método makePay, se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe retornar un error. En caso contrario, al método que proviene de Pay, se le agregará la propiedad de lastCardNumber: donde se devolverán los últimos 4 dígitos de la tarjeta.

// La clase Cash simplemente nos devolverá lo mismo que la clase base.

// Por último se debe implementar la lógica de la función processPay la cual recibirá un método de pago y la cantidad, para poder devolver el objeto llamando al método makePay de cada entidad recibida.

// Cada clase tiene su propio archivo dentro del sistema de archvios del playground

// Ejemplo 1:


// Input:
// const card = new Card("4913478952471122")

// processPay(card, 100)

// Output:

// {
//   realized: true,
//   quantity: 100,
//   lastCardNumbers: "1122",
// }

// Ejemplo 2:


// Input:
// const paypal = new PayPal("test@mail.com")

// processPay(paypal, 240)

// Output:

// {
//   realized: true,
//   quantity: 240,
//   platform: "PayPal",
//   email: "test@mail.com",
// }

// Ejemplo 3:


// Input:
// const cash = new Cash()

// processPay(cash, 400)

// Output:

// {
//   realized: true,
//   quantity: 400,
// }



// For the playground, the next scripts are located in separate files

class Pay {//a class with one method that will inherit to other sub classes
    // Tu código aquí 👈
    makePay(quantity) {//it receives a quantity as a parameter
        return {//and returns an object wit two properties
            realized: true,//the payment was successful
            quantity: quantity
        }
    }
}

class PayPal extends Pay {//this is one of the sub classes that inherits from "Pay"
    // Tu código aquí 👈
    constructor(email) {//it will add an additional property
        super(); //and resumes what is inside the class "Pay"
        this.email = email;
    }

    makePay(quantity) {//the original method is going to be modified
        return {
            ...super.makePay(quantity),//it will still continue doing the same, but...
            platform: "PayPal",//will add two properties
            email: this.email,
        }
    }
}

class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber) {//as with PayPal, in this case, there´s an additional property called "cardNumber"
        super();
        this.cardNumber = cardNumber;
    }

    makePay(quantity) {
        if (this.cardNumber.length !== 16) {//before adding the card number, a validation needs to be done. If its length is different from 16, an error will be thrown
            throw new Error("Invalid Card Number")
        } 
        const lastCardNumbers = this.cardNumber.toString().substr(-4);//otherwise, a constant will be created with the last four characters of that number

        return {//it will return an object with the original properties of the class, plus the last 4 numbers of the card
            ...super.makePay(quantity),
            lastCardNumbers,
        }
    }
}

class Cash extends Pay{//this sub class will do the same thing as the class
    makePay(quantity) {
      return super.makePay(quantity)
    }
  }




// This is the main exercise in the playground
function processPay(method, quantity) {//a function that will receive two arguments, indicating which method is going to be used and the quantiqy of the payment
    return method.makePay(quantity);
}



// Input 1:
const card = new Card("4913478952471122")

processPay(card, 100)




// Input 2:
// const paypal = new PayPal("test@mail.com")

// processPay(paypal, 240)




// Input 3:
// const cash = new Cash()

// processPay(cash, 400)