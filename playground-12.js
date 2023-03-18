// En este desafío debes utilizar promesas para enviar un correo electrónico.

// La función sendEmail recibe tres parámetros: email, subject y body, los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

// En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos para enviar el correo. Recuerda utilizar la siguiente sintaxis:

// reject(new Error(message));

// También recuerda que para usar setInterval o setTimeout debes usar el namespace de window de la siguiente manera para que las pruebas pasen correctamente.

// window.setTimeout(() => {
//   // Código aquí
// }, 1000);

// Ejemplo 1:

// Input:

// sendEmail(
//   "test@mail.com",
//   "Nuevo reto",
//   "Únete a los 30 días de JS"
// )
// .then(result => console.log(result))


// Output:

// // Después de 2 segundos

// {
//   email: "test@mail.com"
//   subject: "Nuevo reto",
//   body:  "Únete a los 30 días de JS",
// }

// Ejemplo 2:

// Input:

// sendEmail(
//   "test@mail.com",
//   "",
//   "Únete a los 30 días de JS"
// )
// .then(result => console.log(result))
// .catch(error => console.log(error))

// Output:

// // Después de 2 segundos

// "Error: Hacen falta campos para enviar el email"





// SOLVING PLAYGROUND


function sendEmail(email, subject, body) { //the user is going to pass 3 parameters to work with
    return new Promise((resolve, reject) => { //asyncronuosly, evaluate this...
        if(!email || !subject || !body) { //if there is missing one of the parameters...
                reject(new Error(`Hacen falta campos para enviar el email`)); //throw this error
            } else { //the 3 parameters were entered
                // window.setTimeout(() => { //use this line in order to run on playground... wait for a moment until giving back the answer to the user
                setTimeout(() => { //use this one to run on my machine
                    const result = { //create an object with the parameters the user introduced
                        email: email,
                        subject: subject,
                        body:  body,
                    };
                    // resolve(console.log(result));
                    resolve(result); //if the user specified all the parameters validly, show the previously created object
                }, 2000); //after 2000ms... which is equal to 2s.
            }
    });
}



// Input 1:

sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))



// Input 2: will throw an error

// sendEmail(
//   "test@mail.com",
//   "",
//   "Únete a los 30 días de JS"
// )
// .then(result => console.log(result))
// .catch(error => console.log(error))
