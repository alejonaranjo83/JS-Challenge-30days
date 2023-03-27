// En este desafío, deberás crear la lógica para un automóvil mediante el uso de clases.

// Deberás implementar la lógica necesaria en la clase Car de tal manera que nos pueda servir de base para crear nuevos autos que reciba los siguientes parametros:

// brand: Marca del auto
// model: Modelo del auto
// year: Año del auto
// mileage: kilometraje del auto
// state: El estado por defecto del auto será false, indicando que el auto se encuentra apagado.
// Además, deberás implementar los siguientes métodos para hacer funcional los vehículos creados con la clase Car

// turnOn(): Método que encenderá el auto.
// turnOff(): Método que apagará el auto.
// drive(kilometers): Con este método podremos aumentar el kilometraje según los kilómetros dados pero solo si el auto está encendido. En caso contrario, deberá mostrar el siguiente mensaje de error: "El auto está apagado".
// Ejemplo 1:

// Input:
// const toyota = new Auto("Toyota", "Corolla", 2020, 0);
// toyota.turnOn();
// toyota.drive(100);
// toyota.mileage

// Output: 100

// Ejemplo 2

// const toyota = new Auto("Toyota", "Corolla", 2020, 0);
// toyota.turnOff()
// toyota.drive(100)

// Output: Error("El auto está apagado")



class Auto {
    constructor(//a method that will receive attributes of the class. Some of them have default values
        brand, model, year, mileage = [], state = false,
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.state = state;
        this.distanceCovered = 0;
    }

    // methods of the class:
    turnOn() {//modify the default value
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
    drive(kilometers) {//receives the distance that wants to be traveled
        if((this.state) === true) {//if the car is turned on...
            this.mileage += kilometers;//add kilometers to the array
            this.distanceCovered += this.mileage;//update the distance covered
        } else {//if the car is turned off, throws and error
            throw new Error("El auto está apagado");
        }    
    }
}






// Input 1:
// const toyota = new Auto("Toyota", "Corolla", 2020, 0);
// toyota.turnOn();
// toyota.drive(100);
// toyota.mileage


// console.log(toyota)



// Input 2

const toyota = new Auto("Toyota", "Corolla", 2020, 0);
toyota.turnOff()
toyota.drive(100)