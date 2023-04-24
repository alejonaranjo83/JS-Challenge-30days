// En este desafío, debes construir una lista de contactos mediante una hashTable.

// Tu objetivo será el de implementar la lógica de la clase ContactList para agregar contactos y realizar las operaciones correspondientes.

// La hashTable (ContactList) deberá tener los siguientes métodos:

// insert(name, phone): este método recibirá el nombre y el número de teléfono de un contacto, y agregará este último a la hashTable.

// get(name): este método recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará null.

// retrieveAll(): este método devolverá un array con todos los buckets utilizados en la hashTable.

// delete(name): este método recibirá el nombre de un contacto y eliminará dicho contacto de la hashTable, en caso de no encontrar el name debe retornar null.

// El código original ya tiene una implementación del método hash por lo que no te tienes que preocuparte por ello.

// Ejemplo 1:

// Input:

// const contactList = new ContactList(10)
// contactList.insert("Mr michi", "123-456-7890")

// contactList.retrieveAll()

// Output: [["Mr michi", "123-456-7890"]]

// Ejemplo 2:

// Input:

// const contactList = new ContactList(10)
// contactList.insert("Mr michi", "123-456-7890")

// contactList.get("Mr Michi")

// Output: "123-456-7890"

// Ejemplo 3:


// Input:

// const contactList = new ContactList(10)
// contactList.insert("Mr michi", "123-456-7890")
// contactList.delete("Mr michi")

// contactList.get("Mr Michi")

// Output: null


// This is a class for building a contact list using a "hashTable"

class ContactList {
    constructor(size) {//the constructor receives the parameter size for defining the size of the table
        // Tu código aquí 👈
        this.buckets = new Array(size);//a new array is created with a number of elements specified by the parameter "size". Each element represents a "bucket"
        this.numBuckets = this.buckets.length;//the amount of buckets is stored in a variable
    }
  
    hash(name) {//a method that takes a name as an input and returns a bucket index
        let total = 0;
        for (let i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        return total % this.numBuckets;
    }
  
    insert(name, phone) {//method for adding a new contact to the list. "name" and "phone" are used as parameters
        // Tu código aquí 👈
        const index = this.hash(name);//calculate the index of the bucket using the "hash" method

        if (!this.buckets[index]) {//if that bucket doesn´t exist...
            this.buckets[index] = [];//a new array is created
        }
      
        this.buckets[index].push([name, phone]);//parameteres "name" and "phone" are added to the bucket
    }
  
    get(name) {//method for searching a contact by his/her name
        // Tu código aquí 👈
        const index = this.hash(name);//calculate the bucket index using the "hash" method 

        if (!this.buckets[index]) {//if the bucket doesn´t exist
            return null;//end the process returning a "null" value
        }
        for (let i = 0; i < this.buckets[index].length; i++) {//otherwise, go through all the buckets
            if (this.buckets[index][i][0] === name) {//see if the name inserted as a parameter matches a name in the bucket
                return this.buckets[index][i][1];//returns the telephone number
            }
        }
        return null;//if the contact hasn´t been found, returns a null value
    }
  
    retrieveAll() {//a method for returning all the contacts of the table
        // Tu código aquí 👈
        const allValues = [];//initialize an empty array

        for (let i = 0; i < this.numBuckets; i++) {//go through each bucket
            if (this.buckets[i]) {
              for (let j = 0; j < this.buckets[i].length; j++) {//and all the contacts within the bucket
                allValues.push(this.buckets[i][j]);//add those contacts to the previously created array
              }
            }
          }
          return allValues;//returns that array
    }
  
    delete(name) {//a method for deleting a contact in the list
        // Tu código aquí 👈
        const index = this.hash(name);

        if (!this.buckets[index]) {
            return null;
        }
      
        for (let i = 0; i < this.buckets[index].length; i++) {//iterate through each contact
            if (this.buckets[index][i][0] === name) {//if the contact is found with that name...
                this.buckets[index].splice(i, 1); //delete that contact using the "splice" method
                return;//returns without a value, indicating that the contact has been deleted successfully 
            }
        }
    }
}
  



// Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.retrieveAll()



// Input2:

// const contactList = new ContactList(10)
// contactList.insert("Mr michi", "123-456-7890")

// contactList.get("Mr Michi")



// Input3:

// const contactList = new ContactList(10)
// contactList.insert("Mr michi", "123-456-7890")
// contactList.delete("Mr michi")

// contactList.get("Mr Michi")