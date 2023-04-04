// En este desafío deberás crear un sistema de administración para un hotel.

// El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.

// El closure debe retornar las siguientes funciones:

// searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

// getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.

// addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

// removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

// getReservations(): esta función nos devolverá todas las reservaciones.

// getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

// El formato que recibirás para las reservaciones será el siguiente:

// id: un identificador único
// name: El nombre de quien agenda
// checkIn: Fecha de llegada
// checkOut: Fecha de salida
// roomNumber: La habitación solicitada
// Ejemplo 1:

// Input:

// const hotel = hotelSystem(10);

// // Agregar una nueva reservación
// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// hotel.getReservations();

// Output:
// [
//   {
//     id: 1,
//     name: "John Doe",
//     checkIn: "01/01",
//     checkOut: "02/01",
//     roomNumber: 1,
//   }
// ]

// Ejemplo 2:

// Input:

// const hotel = hotelSystem(10);

// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// hotel.addReservation({
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 7,
// });

// // Buscar una resevación hecha
// hotel.searchReservation(2);

// Output:
// {
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 7,
// }

// Ejemplo 3:

// Input:

// const hotel = hotelSystem(10);

// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// hotel.addReservation({
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "10/01",
//   roomNumber: 9,
// });

// // Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
// hotel.getAvailableRooms("01/01", "05/01")

// Output:

// [2, 3, 4, 5, 6, 7, 8, 10]



function hotelSystem(rooms) {//a function that recives the amount of rooms to work with. Inside that function, there are some methods to manage hotel reservations
    const reservations = []; //array that will receive reservations created with other method
    

    function addReservation(reservation) {//add a reservation to the array if the room es available for the desired dates.
        // make sure that room is available for the check-in and check-out dates
        const availability = reservations.find((r) => {
            return (
                r.roomNumber === reservation.roomNumber &&
                ((r.checkIn <= reservation.checkIn &&
                    r.checkOut > reservation.checkIn) ||
                    (r.checkIn < reservation.checkOut && r.checkOut >= reservation.checkOut))
            )
        })

        if(availability) {
            throw new Error("La habitación no está disponible");
        } else {
            reservations.push(reservation);
            return "Reserva agregada exitosamente";
        }
    }

    function removeReservation(id) {//delete a reservation according to the specified ID
        const index = reservations.findIndex(obj => obj.id === id);//search the index of the reservation that wants to be deleted. If an index is found, the method receives the index; in the contrary, returns -1
        
        if(index > -1) { //if the index is different than -1... the reservation exists...
            const removedReservation = reservations[index];
            reservations.splice(index, 1); //delete the element in the specified position
            return removedReservation; //return the deleted reservation
        } else {//if there´s no index, then throw an error
            throw new Error("La reservación que se busca remover no existe");
        };
    }

    function searchReservation(id) {//search for a particular according to their ID
        const r = reservations.find(obj => obj.id === id);//search inside the array, the object that contains the reservation.
        
        if(!r) {//if there´s no reservation...
            throw new Error("La reservación no fue encontrada");
        } else {//if there´s a reservation...
            // console.log(r);
            return r;
        };
    }

    function getReservations() { //return the reservations that have been made
        // console.log(reservations);
        return reservations;
    }

    function getSortReservations() {//return reservations according to the checking order (ascending order)
        const sortedReservations = [...reservations]; //create a copy of the original array, avoiding to modify it
        sortedReservations.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));//sort the reservations + transform strings into date value + use a compare function
        return sortedReservations
    }

    function isAvailable(reservation) {//function that will be used in the function
        const checkIn = reservation.checkIn;//create variables with the values of the properties of the reservation that wants to be made
        const checkOut = reservation.checkOut;

        for (const currentReservation of reservations) {//iterate through the array that contains all the reservations
            const currentCheckIn = currentReservation.checkIn;
            const currentCheckOut = currentReservation.checkOut;
            
            if (//if both reservations overlap in the dates
                (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
                (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
                (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
            ) {
                if(currentReservation.roomNumber === reservation.roomNumber) {//but also in the room numbers
                    return false; //that means that the room is not available por reservation
                }
            }
        }
        return true;//if after the iteration there´s no overlapong, it means that the room is available
    }

    function getAvailableRooms(checkIn, checkOut) {//return a list of available rooms for the checkin and checkout dates
        const availableRooms = [];

        for (let i = 1; i <= rooms; i++) {//iterate through all the rooms, starting in number room #1
            const reservation = {checkIn, checkOut, roomNumber: i};//create an object with the values of the current iteration

            if(isAvailable(reservation)) {//use the previously created function to verifiy if it´s available
                availableRooms.push(i);//if it´s already avaliable, add to the array of available rooms
            }
        }
        // console.log(availableRooms);
        return availableRooms;//return what are the available rooms
    };

    return {//this part of the script allows the function to activate the method that user wants to use
        searchReservation,
        getSortReservations,
        addReservation,
        removeReservation,
        getReservations,
        getAvailableRooms,
    };
}






// Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "02/01",
  checkOut: "02/04",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "02/01",
  checkOut: "02/07",
  roomNumber: 7,
});

hotel.addReservation({
    id: 3,
    name: "Alejo Cangrejo",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 3,
  });

// Buscar una resevación hecha
hotel.searchReservation(2);

hotel.removeReservation(1);

hotel.getReservations();
hotel.getSortReservations();

// // Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel.getAvailableRooms("01/01", "05/01")