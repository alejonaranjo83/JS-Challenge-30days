// En este desafío, debes implementar un patrón observer en un sistema de newsletter.

// Tendrás que crear una clase Newsletter que gestione la suscripción de los usuarios a un newsletter y envíe actualizaciones cuando se publique un nuevo artículo. La clase tendrá una lista de suscriptores (subscribers)inicializada, y los siguientes métodos: subscribe(subscriber) para agregar nuevos suscriptores, unsubscribe(email) para eliminar a un suscriptor de la lista mediante su correo electrónico, y post(article) que recibirá un objeto con dos propiedades: title y content.

// Además, necesitarás crear la clase Subscriber, la cual se inicializará con un correo electrónico y un método receive(article) que imprimirá en consola un mensaje que indica que el suscriptor ha recibido un artículo específico.

// Ejemplo


// Input:

// const newsletter = new Newsletter();
// const subscriber1 = new Subscriber("pepe@mail.com");
// const subscriber2 = new Subscriber("juanito@mail.com");
// const subscriber3 = new Subscriber("pedro@mail.com");

// const article = {
//   title: "30 días de js",
//   content: "Aprende js en 30 días"
// }

// newsletter.subscribe(subscriber1);
// newsletter.subscribe(subscriber2);
// newsletter.subscribe(subscriber3);

// newsletter.post(article);

// Output:
// "El suscriptor pepe@mail.com ha recibido el artículo: 30 días de js"
// "El suscriptor juanito@mail.com ha recibido el artículo: 30 días de js"
// "El suscriptor pedro@mail.com ha recibido el artículo: 30 días de js"




// This code has two classes: one to create subscribers to a newsletter and other for the newsletter

class Subscriber {
    // Tu código aquí 👈
    constructor(email) {//this class receives an email as parameter
        this.email = email;
        this.articles = []; //initializes an empty array
    }
    
    receive(article) {//has a method to receive articles
        this.articles.push(article);//add the article received as parameter to array
        console.log(`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`)//shows in the console information about the message that has been received
    }
}


class Newsletter {
    // Tu código aquí 👈
    constructor() {
        this.subscribers = [];//initializes an empty array with the subscribers of the newsletter
    }

    subscribe(subscriber) {//add subscribers to the array of subscribers
        this.subscribers.push(subscriber);
    }

    unsubscribe(email) {
        const subscriberIndex = this.subscribers.findIndex((s) => s.email === email)//creates a constant that will store a result that varies depending if the email is inside the array of subscribers
        if(subscriberIndex === -1) {//if the email wasn´t found it (-1 was retrieved for the previous constant)
            throw new Error("subscriber not found");
        }
        this.subscribers.splice(subscriberIndex, 1) //if the email was found, erase it from the list
    }

    post(article) {
        this.subscribers.forEach((subscriber) => { //go through each subscriber of the array
            subscriber.receive(article); //use its own method for receiving articles
        })
    }
}



// Input:

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);
