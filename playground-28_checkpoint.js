// En este desafío crearas un Sistema de reservaciones de vuelos.

// Tendrás que implementar la lógica de las siguientes clases con las siguientes características (cada clase tiene su propio archivo dentro del coding playground)

// Flight: permite crear vuelos regulares con los atributos origin (origen), destination (destino), date (fecha de salida), capacity (capacidad máxima), price (precio) e inicilizará una variable llamada passengers la cual será el array donde almacenaremos a los pasajeros. Además, incluirá el método sellTicket(passenger) para vender un boleto a un pasajero específico siempre y cuando la capacidad sea mayor a cero. Este método agregará al pasajero a la lista de pasajeros del avión y a su vez agregará el vuelo a la lista de vuelos del pasajero. La función devolverá un objeto reservation.

// Passenger: cada pasajero tendrá los atributos name (nombre), lastName (apellido) y age (edad) y se inicializará con una lista de vuelos (flights) vacía. Cada que se agregue un vuelo a dicha lista, solo deberán agregarse las siguientes propiedades: origin, destination, date y price.

// Reservation aceptará un objeto flight y un objeto passenger, e incluirá el método reservationDetails() que devolverá un objeto con los detalles de la reservación, incluyendo origin, destination, date y reservedBy (nombre completo del pasajero).

// PremiumFlight extenderá de la clase Flight y agregará la propiedad specialService que será un costo adicional al precio del vuelo dentro del método sellTicket(passenger).

// EconomicFlightde igual manera, extenderá de la clase Flight y aplicará un descuento del 20% dentro del método sellTicket(passenger) para los pasajeros con una edad menor a 18 años o mayor a 65 años.

// Ejemplo 1


// Input:
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights)

// Output:
// [
//   {
//     origin: "CDMX",
//     destination: "Guadalajara",
//     date: "2022-01-01",
//     price: 1000,
//   },
// ]

// Ejemplo 2:

// Input:
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(flight.passengers)

// Output:

// [
//   {
//     fullName: "Juan Perez",
//     age: 30,
//   },
// ]

// Ejemplo 3:

// Input:
// const flight = new EconomicFlight(
//   "New York",
//   "Paris",
//   "2023-12-25",
//   100,
//   200
// );

// const passenger = new Passenger("Pedro", "Gutierrez", 17);

// const reservation = flight.sellTicket(passenger);

// console.log(reservation.flight.price)

// Output: 160



// In this code, three classes are going to be defined: Passenger, Reservation and Flight; also there are going to be two sub classes: EconomicFlight and PremiumFlight.

class Passenger {
    constructor(name, lastName, age) {//this class is going to be initialized with three properties
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.flights = [];//and an empty array that will store the flights that the passenger will take
    }

    addFlight(flight) {//a method that will receive an instance of the class Flight as a parameter
        this.flights.push({//from which it will create another object with a selection of information of the flight, that will be added to the flights array
            origin: flight.origin, 
            destination: flight.destination, 
            date: flight.date, 
            price: flight.price
        });
    }
}


class Reservation {
    constructor(flight, passenger) {
      // Tu código aquí 👈
      this.flight = flight;
      this.passenger = passenger;
    }
  
    get confidentialData() {//a method that will return an object with the full name of the passenger and his/her age, without showing another type of information that may be confidential
        return (() => {
          const fullName = `${this.passenger.name} ${this.passenger.lastName}`;
          const age = this.passenger.age;
    
          return {
            fullName,
            age,
          };
        })();
    }

    reservationDetails() {//a method that will return an object with the flight information and the information of the passenger
      // Tu código aquí 👈
      const flight = this.flight;
      const passenger = this.confidentialData;
  
      return {
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        reservedBy: passenger.fullName,
      };
    }
} 


class Flight {
    constructor(origin, destination, date, capacity, price) {
        // Tu código aquí 👈
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.capacity = capacity;
        this.price = price;
        this.passengers = [];
    }

  
    sellTicket(passenger) {//a method that will receive a passenger as a parameter and will return an object of the Reservation class
        // Tu código aquí 👈
        if(this.capacity > 0) {//as long as the flight has the capacity
            this.capacity -= 1;//decrease the flight capacity in one sit, because a new passenger will be entering
            const reservation = new Reservation(this, passenger);//create a new instance of the Reservation class, using the actual instance of the Flight class in which we are working
    
            this.passengers.push(reservation.confidentialData);//add the previously created object to the passengers array
            passenger.addFlight(this);//use the method of the Passenger instance (stored in the passenger variable), using as an argument the actual instance of the Flight class.
  
            return reservation;
        } //else {
        //     throw new Error ("The flight is full and tickets can´t be sold")
        // }
    }
}


class EconomicFlight extends Flight {
    sellTicket(passenger) {//over write the sellTicket method from the Flight class
        // Tu código aquí 👇
        if (this.capacity > 0) {//if the flight still has capacity for more passengers
            this.capacity -= 1;//decrease by one that capacity
            const reservation = new Reservation(this, passenger);//create a new instance of the Reservation class
      
            this.passengers.push(reservation.confidentialData);//add this reservation to the passengers array
            passenger.addFlight(this);//use the addFlight method of the passenger instance, with the current information of this flight
      
            if (passenger.age < 18 || passenger.age > 65) {// if the passenger is under or over this age range...
              this.price *= 0.8;//give a discount of 20%
            }
            return reservation;
        }
    }
}


class PremiumFlight extends Flight {
    // Tu código aquí 👈
    constructor(origin, destination, date, price, specialService) {
        super(origin, destination, date, capacity, price);//use the same properties of the Flight class, and...
        this.specialService = specialService;//add a specialService property
    }

    sellTicket(passenger) {//over write this method adding the cost of the specialService to the flight price
        // Tu código aquí 👈
        if(this.capacity > 0) {
            this.capacity -= 1;
            const reservation = new Reservation(this, passenger);
    
            this.passengers.push(reservation.confidentialData);
            passenger.addFlight(this);
            this.price += this.specialService;
    
            return reservation;
        } //else {
        //     throw new Error(`The flight is full`)
        // }
    }
}





// Input 1:
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(passenger.flights)


// Input 2:
// const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
// const passenger = new Passenger("Juan", "Perez", 30);

// const reservation = flight.sellTicket(passenger);

// console.log(flight.passengers)



// Input 3:
const flight = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price)