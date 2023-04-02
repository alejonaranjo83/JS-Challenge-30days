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

class Pay {
    // Tu código aquí 👈
    // constructor() {}

    makePay(quantity) {
        return {
            realized: true,
            quantity: quantity
        }
    }
}

class PayPal extends Pay {
    // Tu código aquí 👈
    constructor(email) {
        super(); 
        this.email = email;
    }

    makePay(quantity) {
        return {
            ...super.makePay(quantity),
            platform: "PayPal",
            email: this.email,
        }
    }
}

class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }

    makePay(quantity) {
        if (this.cardNumber.length !== 16) {
            throw new Error("Invalid Card Number")
        } 
        const lastCardNumbers = this.cardNumber.toString().substr(-4);

        return {
            ...super.makePay(quantity),
            lastCardNumbers,
        }
    }
}

class Cash extends Pay{
    // constructor() {
    //     super();
    // }
    makePay(quantity) {
      return super.makePay(quantity)
    }
  }




// This is the main exercise in the playground
function processPay(method, quantity) {
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