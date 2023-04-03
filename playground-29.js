// En este desafío, tendrás que aplicar el patrón de diseño Singleton en un Chat.

// Tu objetivo es crear la lógica en la clase Chat para garantizar que exista una única instancia de la clase en todo momento.

// Además, la clase Chat deberá contener los siguientes métodos:

// sendMessage(message): Este método debe permitir enviar un mensaje a todos los usuarios en la lista, accediendo al método receiveMessage de cada instancia de usuario.

// addUser(user): Este método debe agregar un nuevo usuario a la lista, verificando que sea una instancia de la clase User (el código de esta clase la puedes ver dentro del sistema de archivos del playground).

// removeUser(name): Este método te permitirá eliminar un usuario de la lista por su nombre.

// Ejemplo 1:


// Input:
// const chat1 = new Chat();
// const chat2 = new Chat();

// console.log(chat1 === chat2)

// Output: true

// Ejemplo 2:


// Input:

// const chat = new Chat();
// const user1 = new User("Pepito");
// const user2 = new User("Juanito");
// chat.addUser(user1);
// chat.addUser(user2);

// chat.sendMessage("Nunca pares de aprender!");

// console.log(user1.messages)
// console.log(user2.messages)

// Output:
// ["Nunca pares de aprender!"]
// ["Nunca pares de aprender!"]


// This code is going to define two classes: User and Chat

class User {
    constructor(name) {//this class receives the name of the user as a parameter
      this.name = name;//creates a property call "name" equal to the parameter
      this.messages = [];//creates an empty array
    }
  
    receiveMessage(message) {//method for receiving messages and adding to the previously created array
      this.messages.push(message);
    }
  }


class Chat {
    constructor() {//this class constructor...
        if(!Chat.instance){//verifies if it already exists an instance of the class Chat, using the "Singleton" pattern. If there isn´t...
            this.name = "Chat";//creates a property name equal to "Chat"
            this.users = [];//creates a property users which is an empty array
            Chat.instance = Object.freeze(this);//and freezes the instance avoiding to be modified
        }
        return Chat.instance //returns the created instance
    }

    addUser(user) {//a method to add users that receives the name of the user as a parameter
        if(user instanceof User) {//if the user is an instance of the class User...
            this.users.push(user);//it will be added to the users list
        }
    };

    sendMessage(message) {//a method that receives a message as a parameter
        this.users.forEach((user) => {//goes through each user in the array
            user.receiveMessage(message);//and uses the method that each user has to receive the message
        })
    };


    removeUser(name) {//a method that receives the name of a user as a parameter
        const userIndex = this.users.findIndex((u) => u.name === name);//creates a constant to know if the user of the parameter is inside the array of users
        if(userIndex === -1) {//if he didn´t found it (the previous operation returned -1)
            throw new Error("User not found");//an error is sent
        }
        this.users.splice(userIndex, 1);//if he found it, delete that user
    };
}



// Input 1:
// const chat1 = new Chat();
// const chat2 = new Chat();

// console.log(chat1 === chat2)



// Input 2:

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)