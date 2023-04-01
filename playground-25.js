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




class User {
    // constructor(name, age, friends = [], messages = []) {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._friends = [];
        this._messages = [];
    };

    get name() {
        return this._name;
    };

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
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

    addFriend(user){
        this._friends.push(user);
    };
   
    sendMessage(message, friend){
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