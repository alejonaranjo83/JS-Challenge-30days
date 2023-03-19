// En este desafío deberás validar un formulario de registro de usuario.

// Tu tarea es implementar la lógica de la función validateForm la cual recibirá como parámetro un objeto con los datos del formulario al igual que una lista de usurios registrados.

// La función debe verificar que todos los campos requeridos del formulario (name, lastname, email y password) estén completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.

// Para lanzar dicho error debes usar la siguiente sintaxis

// throw new Error("Faltan los siguientes campos: name, email, etc...");

// Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email ya está en uso, debe retornar un error especificando el email duplicado.

// Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.

// Ejemplo 1

// Input:

// const formData = {
//   name: "Juan",
//   lastname: "Perez",
//   email: "juan@example.com",
//   password: "123456"
// }

// const registeredUsers = [
//   { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
//   { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
// ]

// validateForm(formData, registeredUsers)

// Output:

// "Tu registro fue exitoso Juan Perez"

// Ejemplo 2


// Input:

// const formData = {
//   name: "Juan",
//   password: "123456",
// };

// const registeredUsers = [
//   { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
//   { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
// ]

// validateForm(formData, registeredUsers)

// Output:

// "Faltan los siguientes campos requeridos: lastname, email"


function validateForm(formData, registeredUsers){
    // 1. Verifying that all the fields in the form are complete. If some field is missing, throw an error specifying which fields are missing; throw new Error(`adsad`)

    const missing = []; //array that will store the missing fields

    const requiredFields = [`name`, `lastname`, `email`, `password`] //array that will be used to check that a new user has all of them

    requiredFields.forEach((field) => { // go through the array "requiredFields" 
        if(!formData[field]) { //if there´s a field that doesn´t exists in the object "formData"... if this property of the object is false (undefined, null, false, 0 or empty string), convert it into "true"
            missing.push(field); //add it to the array "missing"
        }
    })    

    if(missing.length > 0) { //if there are missing fields 
        // const message = `Faltan los siguientes campos: ${missing.join(", ")}`; //create a string that will join the values that are missing with ", "
        // throw new Error(message);
        throw new Error(`Faltan los siguientes campos: ${missing.join(", ")}`) //show an error with the previous message
    }

    
    // 2. Verifying that email is not in the registered users list. In case there´s a user with that email, return an error specifying the duplicated email

    // const newEmail = formData.email;
    // const duplicatedEmail = registeredUsers.find(e => e.mail === newEmail);
    
    const duplicatedEmail = registeredUsers.find(e => e.email === formData.email);
    if(duplicatedEmail) {
        throw new Error(`El email ${formData.email} ya se encuentra registrado`);
    } else { // 3. If everything is ok, the user will be added to the list of registered users, with all the fields of the form, with exception of the password. Then it will return a message indicating that the registration was succesful, along with the user´s first and last name
        const newUser = {
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
        };

        registeredUsers.push({...newUser});
        return(`Tu registro fue exitoso ${newUser.name} ${newUser.lastname}`)
    }
}



// Input 1:

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    //   email: null,
    // email: "pedro@example.com",
    password: "123456"
}


const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]


// Input 2:
// const formData = {
//       name: "Juan",
//       password: "123456",
//     };
    
//     const registeredUsers = [
//       { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
//       { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
//     ]


validateForm(formData, registeredUsers)










// SLN PLATZI:
export function validateForm(formData, registeredUsers) {
    const requiredFields = ["name", "lastname", "email", "password"];
  
    if (!requiredFields.every((field) => formData[field])) {
      throw new Error(
        `Faltan los siguientes campos requeridos: ${requiredFields
          .filter((field) => !formData[field])
          .join(", ")}`
      );
    }
  
    const existUser = registeredUsers.find(
      (user) => user.email === formData.email
    );
  
    if (existUser) {
      throw new Error(`El usuario con el email ${formData.email} ya existe`);
    }
  
    registeredUsers.push({
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
    });
  
    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
  }
  