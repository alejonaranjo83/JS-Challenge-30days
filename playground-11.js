// Playgroung #11 - Class 33

// En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

// addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
// removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
// getTasks(): Devuelve el array de tareas.
// getPendingTasks(): Devuelve solo las tareas pendientes.
// getCompletedTasks(): Devuelve solo las tareas completadas.
// markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
// getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
// filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
// updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
// Ejemplo 1:

// Input:
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });


// planner.addTask({
//     id: 2,
//     name: "Llamar a Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// planner.markTaskAsCompleted("Llamar a Juan")

// Output:
// planner.getCompletedTasks()
// [{
//     id: 2,
//     name: "Llamar a Juan",
//     completed: true,
//     priority: 3,
//     tags: ["personal"]
// }]

// Ejemplo 2:

// Input:
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });

// planner.addTask({
//     id: 2,
//     name: "Llamar a Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// Output:
// planner.filterTasksByTag("shopping")
// [{
//     id: 1,
//     name: "Comprar leche",
//     completed: false,
//     priority: 3,
//     tags: ["shopping", "home"]
// }]



// Sln desarrollada con ensayo y error personal + pasa a paso con Chat GPT3 para entender qué sucede en cada caso:

function createTaskPlanner() {//function that will create a planner which has differente methods inside him
    const tasks = []; //array that will receive tasks which will be created or deleted, depending on what the usar wants to do

    return {
        addTask(newTask){ //method for adding tasks
            newTask.completed = false; //the "completed" property will be "false" by default
            tasks.push(newTask); //add this task to the array
        },
        removeTask(taskCodeOrName){ //if the id or the name that the user specify exists inside the array, delete that task
            const taskIndex = tasks.findIndex(task => task.id === taskCodeOrName ||
                task.name === taskCodeOrName); //"taskIndex" will store the task that is going to be deleted. If a task is found, "taskIndex" will store the position in which the task is found. If there´s no task found, "findIndex" will return "-1"
            if(taskIndex !== -1) { //if a task was found... if taskIndex is different to "-1" it means that there´s a task that was found, so...
                tasks.splice(taskIndex, 1); //delete that task according to its position (taskIndex) and only delete one element
            }
        },
        getTasks(){
            console.log(tasks); //print the array of tasks in the console
        },
        getPendingTasks(){
            return tasks.filter((task) => !task.completed); //show the tasks that haven´t been completed
        },
        getCompletedTasks(){
            return tasks.filter((task) => task.completed); //show the tasks that have been completed
        },
        markTaskAsCompleted(idOrName) {
            const task = tasks.find((task) => task.id === idOrName ||
            task.name === idOrName); //find a task according to the id or name that the user specify
            if (task) { //if a task is found, then...
              task.completed = true; //it´s default property will be modified for "true"
            }
        },
        getSortedTasksByPriority() {
            let sortedTasks = []; //create a new array that will receive the tasks ordered according to its priority, from the lower number to the highest
            sorting = tasks.sort((a, b) => a.priority - b.priority) //use a compare function that will compare 2 objects according to its priority. If "a" is lower than "b" then it will return a negative value; if they have the same value, it will return 0; if "a" is higher than "b" it will return a positive value. Then with sort, the tasks will be ordered
            sortedTasks.push(sorting); //add that task to the ordered array
            // console.log(sortedTasks);
        },
        filterTasksByTag(tag){
            return tasks.filter((task) => task.tags.includes(tag)) //return a task according to the tag that the user have specified
        },
        updateTask(taskId, updates){ //update a task according to the index and the new properties that the user have defined
            const taskUpdate = tasks[taskId]; //find the task that is going to be updated
            if(taskUpdate){
                Object.assign(taskUpdate, updates) //update that task with the properties of the new object
            }
        }
    }    
}


// Input
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.getTasks();

planner.removeTask(1);
planner.removeTask("Comprar leche");
planner.getTasks();



planner.addTask({
    id: 1,
    name: "Comprar kipitos",
    priority: 4,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 3,
    name: "Terminar Timescales",
    priority: 2,
    tags: ["personal"],
    // completed: true,
});

// planner.markTaskAsCompleted(1);
planner.markTaskAsCompleted("Comprar leche");
planner.getPendingTasks()

planner.getCompletedTasks()


planner.getSortedTasksByPriority()

const filteredTasks = planner.filterTasksByTag("home");

console.log(filteredTasks);

planner.updateTask(1, {
    name: "Ir a la piscina",
    priority: 3,
    tags: ["fitness", "swimming"],
});




// Consulta chatGPT3:
// Estoy creando un planeador en JS. Quiero que dentro del mismo hayan varios métodos. Por ejemplo, tengo creado un método para añadir objetos con tareas a un array y otro para saber qué objetos tiene por dentro:

// function createTaskPlanner() {
//     const tasks = [];

//     return {
//         addTask(newTask){
//             tasks.push(newTask);
//         },
//         getTasks(){
//             console.log(tasks);
//         },
//     }
// }

// Para usarlo, introduzco tareas que tienen las siguientes propiedades:
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });


// Crea métodos dentro de la función createTaskPlanner que me permitan: eliminar objetos dependiendo del código o nombre que indique el usuario; hacer que la propiedad "completed" de las tareas que se van a agregar, esté configurada como false; saber cuáles tareas están pendientes y otro que devuelva las tareas completadas