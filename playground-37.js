// En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.

// Debes crear un closure que use Maps y Sets para devolver 2 funciones:

// addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.

// printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.



// Solution that runs on my machine, but not in the playground:

function taskManager() {
    const taskMap = new Map();

    function addTask(task, tags) {
        const taskLowerCase = task.toLowerCase();
        
        if (taskMap.has(taskLowerCase)) {
            const tagging = taskMap.get(taskLowerCase);
            tags.forEach(tag => tagging.add(tag));
        } else {
            const tagging = new Set(tags);
            taskMap.set(taskLowerCase, tagging);
        }
    }
    
    function printTasks() {
        const result = new Map();

        for (const [task, tagging] of taskMap.entries()) {
            const tags = Array.from(tagging);
            result.set(task, tags);
        }
        
        return result;
    }

 
    this.addTask = addTask;
    this.printTasks = printTasks; 
}





// Solution of a PLATZI mate that runs on the playground, but not in my machine


function taskManager() {//a function that returns an object with two methods: addTask() and printTask()
    let tasks = new Map()//a new instance of Map is created, for storing key-value couples
    
    return {//returns an object with two methods. Both of them have access to the "tasks" variable through a closure mechanism. 
        addTask(task, tags) {//a method that receives two parameters that represents the task that want to be added and array of tags associated to that task respectively. 
            const newTask = task.toLowerCase()//the tasks are converted to lower case letters and stored into a new variable
            if (!tasks.has(newTask)) {//check if the Map doesn´t have the new task, then...
                tasks.set(newTask, new Set(tags))//add a new entry into the map, being "newTask" the key and the value is a new Set that has the tags
            } else {//if the map already has that tasks, goes through each tag
                tags.forEach(tag => tasks.get(newTask).add(tag))//and add the tag to Set associated with the newTask
            }
        }, 
        printTasks() {
            return tasks
        }
    }
}




// Input 1:

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);

printTasks();





// Input 2

// const myTaskManager = taskManager()
// addTask("Comprar leche", ["compras", "urgente"]);
// addTask("Sacar al perro", ["mascotas"]);
// addTask("Hacer ejercicio", ["salud"]);
// addTask("Comprar leche", ["lácteos"]);