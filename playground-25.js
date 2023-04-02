// En este desafío, debes implementar la lógica de la clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.

// La clase debe tener las siguientes variables privadas:

// name
// age
// friends (array de objetos Usuario)
// messages (array de strings)
// Además, debes proporcionar los siguientes métodos públicos:

// addFriend(friend): agrega un usuario a la lista de amigos del usuario actual.
// sendMessage(message, friend): agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
// showMessages(): devuelve la lista de mensajes del usuario actual.
// También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

// Ejemplo 1:


// Input:

// const usuario1 = new Usuario("Juan", 20);
// const usuario2 = new Usuario("Maria", 25);
// usuario1.addFriend(usuario2);
// usuario1.sendMessage("Hola Maria!", usuario2);

// usuario1.showMessages()

// Output:

// ["Hola Maria!"]

// Ejemplo 2:


// Input:

// const usuario1 = new Usuario("Juan", 20);
// usuario1.name = "Pepito"
// console.log(usuario1.name)

// Output:

// "Pepito"




class User { //a class is defined for a user with some properties
    constructor(name, age) { //there are 2 basic arguments for each instance (a user) and two lists for friends and messages
        this._name = name;
        this._age = age;
        this._friends = [];//if "friends" or "messages" are provided when creating an instance, those values will be used; otherwise, empty arrays will be used by default
        this._messages = [];
    };

    get name() { //"get" and "set" methods allows to access and update the "name" and "age" property of an instance (a user). With "get" I can obtain the value of a property
        return this._name;
    };

    set name(newName) { //with "set" I can assign a value to the property
        if (newName.length > 0) { //when a setter is called, a new value is set for the property, provided that some condition is met
            this._name = newName;
        } else {//if the new name is an empty string, an error will be thrown
            throw new Error("El nombre no puede estar vacío");
        }
    }

    get age() {
        return this._age;
    };

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            throw new Error("El nombre no puede estar vacío");
        }
    };

    addFriend(user){//method for adding a friend
        this._friends.push(user);
    };
   
    sendMessage(message, friend){//method for sending a message to other users
        this._messages.push(message);
        friend._messages.push(message);
    };

    showMessages(){
        console.log(this.messages);
        return this._messages;
    }; 
}



// Input 1:

// const usuario1 = new User ("Juan", 20);
// const usuario2 = new User ("Maria", 25);
// usuario1.addFriend(usuario2);
// usuario1.sendMessage("Hola Maria!", usuario2);

// usuario1.showMessages()

// Input 2:

const usuario1 = new User("Juan", 20);
usuario1.name = "Pepito"
console.log(usuario1.name)