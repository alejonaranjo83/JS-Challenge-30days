// El objetivo de este ejercicio es crear un proxy que controle el acceso a un servicio de mensajería.

// En el sistema de archivos encontrarás un archivo llamado messages.js que representa al servicio de mensajería y cuenta con dos métodos: sendMessage(text) y getHistory(). Sin embargo, actualmente, no se verifica si el usuario que hace uso de la clase está logeado, por lo que es necesario implementar un proxy.

// Tu tarea es agregar la lógica necesaria de la clase MessagesProxy que actuará como intermediario entre los clientes y el servicio de mensajería, manteniendo los métodos de Messages.js, pero agregando una verificación de si el usuario está logeado antes de permitir el acceso al historial de mensajes o el envío de un mensaje. Si el usuario no está registrado, se deberá lanzar un error con el mensaje "Usuario no registrado".

// Recuerda hacer uso de throw new Error("")

// Además, deberás implementar la logica de la clase User con los métodos login(), logout() y isLoggedIn(), que permitirá determinar si el usuario está logeado o no.

// Ejemplo 1:

// Input:
// const user = new User("John")

// user.login()
// user.isLoggedIn()

// Output: true

// Ejemplo 2:

// Input:
// const user = new User("John")
// const messages = new Messages()
// const messagesProxy = new MessagesProxy(messages, user)

// user.login()
// messagesProxy.sendMessage("Hola")
// messagesProxy.getHistory()

// Output: ["Hola"]

// Ejemplo 3:

// Input:
// const user = new User("John")
// const messages = new Messages()
// const messagesProxy = new MessagesProxy(messages, user)

// messagesProxy.sendMessage("Hola")

// Output: Error("Usuario no registrado")



// This code has three interrelated classes: User; MessagesProxy and Messages
class User {//this is the basic class
    constructor(name) {//receives a "name" parameter
      // Tu código aquí 👈
      this.name = name;
      this.logged = false;//sets the user as not logged in by default
    }
  
    login() {//method for logging in a user
      // Tu código aquí 👈
      this.logged = true;
      console.log(`El usuario ${this.name} se ha logueado`)
    }
  
    logout() {//method for logging out
      // Tu código aquí 👈
      this.logged = false;
      console.log(`El usuario ${this.name} ha cerrado sesión`)
    }
  
    isLoggedIn() {//method for knowing if the user is logged in
      // Tu código aquí 👈
    //   console.log(`El usuario ${this.name} está logueado`)
      return this.logged;
    }
}

class Messages {
    // No debes editar este código ❌
    constructor() {
      this.history = [];
    }
  
    sendMessage(text) {//this method receives a text and added it to the array located in the property "history"
      this.history.push(text);
    }
  
    getHistory() {//this method returns the messages history
        // console.log(this.history);
        return this.history;
    }
}

class MessagesProxy {//this class acts as an intermediary between the client and the message service
    constructor(messages, user) {//receives two parameters in its constructor
      // Tu código aquí 👈
      this.messages = messages;
      this.user = user;
    }
    
    sendMessage(text) {//this method receives a text
      // Tu código aquí 👈
      if(this.user.isLoggedIn()) {//before sending the message, it verifies if the user is logged in
        this.messages.sendMessage(text);//if the user is logged in, uses the method "sendMessage" of the Message class
      } else {//otherwise, it throws an error
        throw new Error ("Usuario no registrado")
      }
    }
  
    getHistory() { 
      // Tu código aquí 👈
      if(this.user.isLoggedIn()) {
        return this.messages.getHistory();//if the user is logged in, it uses the "getHistory" method of the Message class and returns the message history
      } else {
        throw new Error ("Usuario no registrado")
      }
     }
}


  



// Input 1:
// const user = new User("John")

// user.login()
// user.isLoggedIn()
// user.logout()


// Input 2:
const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

user.login()
messagesProxy.sendMessage("Hola")
messagesProxy.sendMessage("Cómo estás?")
messagesProxy.getHistory()
