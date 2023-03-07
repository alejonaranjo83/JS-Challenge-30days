// En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

// Recibirás un array de objetos que incluirán las siguientes propiedades:

// name: nombre del gatito.
// followers: un array de números, donde cada uno representa los seguidores de cada red social.
// Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: findFamousCats([
//   {
//     name: "Luna",
//     followers: [500, 200, 300]
//   },
//   {
//     name: "Michi",
//     followers: [100, 300]
//   },
// ])

// Output: ["Luna"]

// Ejemplo 2:

// Input: findFamousCats([
//   {
//     name: "Mimi",
//     followers: [320, 120, 70]
//   },
//   {
//     name: "Milo",
//     followers: [400, 300, 100, 200]
//   },
//   {
//     name: "Gizmo",
//     followers: [250, 750]
//   }
// ])

// Output: ["Milo", "Gizmo"]




// Sln final

function findFamousCats(cats) {
    let catsTotalFollowers = []; //array q se llenará con cada gato después de haber sumado el total de seguidores q tiene
    let maxFollowers = 0; //cantidad que determinará quién es el gato con más seguidores
    let maxFollowersNames = []; //array que se llenará en caso de haber gatos con la misma cantidad de seguidores

    for (let i = 0; i < cats.length; i++) { //ciclo para sumar los seguidores de cada gato
        const suma = cats[i].followers.reduce(function(acumulador, numero){
            return acumulador + numero;
        });

        const catTotalFollowers = { //creo objeto para cada gato con la cantidad de seguidores sumada
            name: cats[i].name,
            followers: suma,
        };
        
        catsTotalFollowers.push(catTotalFollowers); //subo cada gato al array que los contendrá a todos
    }

    for (let i = 0; i < catsTotalFollowers.length; i++) {
        if(catsTotalFollowers[i].followers > maxFollowers) { //si el número total de seguidores de un gato es mayor que la cantidad máxima de seguidores...
            maxFollowers = catsTotalFollowers[i].followers; //entonces asigne ese valor a la cantidad máxima de seguidores
            maxFollowersNames = [catsTotalFollowers[i].name]; //y asigne también el nombre de ese gato al array con los nombres
        } else if (catsTotalFollowers[i].followers === maxFollowers) {
            maxFollowersNames.push(catsTotalFollowers[i].name); //si hay otro gato que tenga la misma cantidad de seguidores, entonces añada también su nombre al array de nombres
        }
    }
    return maxFollowersNames;
    // console.log(maxFollowersNames);
}



findFamousCats([
    {
        name: "Michi",
        followers: [100, 300]
    },
    {
      name: "Luna",
      followers: [500, 200, 300]
    },
    {
        name: "Cuquis",
        followers: [100, 200, 300, 100, 100, 200]
      },
])



findFamousCats([
      {
        name: "Mimi",
        followers: [320, 120, 70]
      },
      {
        name: "Milo",
        followers: [400, 300, 100, 200]
      },
      {
        name: "Gizmo",
        followers: [250, 750]
      }
    ])