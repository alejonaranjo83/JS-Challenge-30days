// En este desafío tendrás que crear una calculadora mediante el uso de closures.

// La calculadora debe contar con los siguientes métodos:

// add: recibe un número, lo suma al total y devuelve el resultado
// subtract: recibe un número, lo resta al total y devuelve el resultado
// multiply: recibe un número, lo multiplica al total y devuelve el resultado
// divide: recibe un número, lo divide al total y devuelve el resultado
// clear: reinicia el total a 0 y devuelve el resultado
// getTotal: devuelve el total actual.
// Ejemplo 1:

// Input:
// const calculator = createCalculator()
// calculator.add(10)

// Output: 10

// Ejemplo 2:

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)

// Output: 20

// Ejemplo 3:

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)
// calculator.clear()

// Output: 0


function createCalculator() {
    let calculator = { //object that contains methods to be invoked by the user
        total: 0,

        add: function(value) { //method for adding
            this.total += value; //sum the value introduced by the user to the value of the property "total"
            return this.total; //return the new total
        },
        subtract: function(value) { //method for substracting
            this.total -= value;
            return this.total;
        },
        multiply: function(value) { //method for multiplying
            this.total *= value;
            return this.total;
        },
        divide: function(value) { //method for dividing
            this.total /= value;
            return this.total;
        },
        clear: function() { //method for clearing the count
            this.total = 0;
            return this.total;
        },
        getTotal: function() { //method for knowing what´s the current total
            return this.total;
        }
    }
    return calculator //return the object, which is the same to say that it should give the result depending on the method that the user invoked from that object
}




const calculator = createCalculator(); //creating an instance of the calculator
calculator.add(10);
calculator.clear();
calculator.subtract(-10);
calculator.multiply(2);
calculator.divide(3);
calculator.getTotal();










// SLN profe Platzi:
function createCalculator() {
    // Primero declaramos nuestra variable privada
    // que tendrá un valor inicial de 0
    let total = 0;
  
    // dentro del return devolvemos las funciones que modifican la variable privada
    return {
      add(value) {
        // Para sumar, simplemente sumamos el valor al total
        // y retornamos el total
        total += value;
        return total;
      },
  
      subtract(value) {
       // Lo mismo con la resta 
        total -= value;
        return total;
      },
  
      multiply(value) {
        // Lo mismo con la multiplicación y división
        total *= value;
        return total;
      },
  
      divide(value) {
        total /= value;
        return total;
      },
  
      // Al final una función para reiniciar el valor a 0
      clear() {
        total = 0;
        return total;
      },
  
      getTotal() {
        // Y el total por si se quiere guardar el valor en otra variable en cierto momento
        return total;
      },
    };
  }
