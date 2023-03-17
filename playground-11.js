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



// Sln desarrollada con ensayo y error personal + pasa a paso con Chat GPT3 para entender qué sucede en cada caso + sln de Platzi (porque lo q fxna en mi máquina no necesariamente lo hace en el playground de Platzi):

function createTaskPlanner() {//function that will create a planner which has differente methods inside him
    let tasks = []; //array that will receive tasks which will be created or deleted, depending on what the usar wants to do

    return {
        addTask(task){ //method for adding tasks
            task.completed = false; //the "completed" property will be "false" by default
            tasks.push(task); //add this task to the array
        },
        removeTask(value){ 
            if(typeof value === "number") {//if the value that the user has indicated is a number...
                tasks = tasks.filter((task) => task.id != value); //create an array that doesn´t have the task with that value
            } else { //if it´s type is different than a number, do the same as the previous one
                tasks = tasks.filter((task) => task.name != value);
            }
        },
        getTasks(){
            return tasks; //return the array of tasks in the console
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
            let sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority); //create a new array that will receive the tasks ordered according to its priority, from the lower number to the highest
            //"(a, b) => ......" means: use a compare function that will compare 2 objects according to its priority. If "a" is lower than "b" then it will return a negative value; if they have the same value, it will return 0; if "a" is higher than "b" it will return a positive value. Then with sort, the tasks will be ordered
            return sortedTasks;
        },
        filterTasksByTag(tag){
            return tasks.filter((task) => task.tags.includes(tag)) //return a task according to the tag that the user have specified
        },
        updateTask(taskId, updates){ //update a task according to the index and the new properties that the user have defined
            const taskUpdate = tasks.findIndex((task) => task.id === taskId); //find the task that is going to be updated
            tasks[taskUpdate] = {...tasks[taskUpdate], ...updates};

        }
    }    
}


// Input
function createTaskPlanner() {
    const taskPlanner = {
      tasks: [],
      addTask(name, priority, tags) {
        const task = {
          id: this.tasks.length + 1,
          name,
          priority,
          tags,
          completed: false,
        };
        this.tasks.push(task);
        return task;
      },
      removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      removeTaskByName(name) {
        this.tasks = this.tasks.filter((task) => task.name !== name);
      },
      completeTask(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
          task.completed = true;
        }
      },
      completeTaskByName(name) {
        const task = this.tasks.find((task) => task.name === name);
        if (task) {
          task.completed = true;
        }
      },
      getCompletedTasks() {
        return this.tasks.filter((task) => task.completed);
      },
      filterTasksByTag(tag) {
        return this.tasks.filter((task) => task.tags.includes(tag));
      },
      getSortedTasksByPriority() {
        return [...this.tasks].sort((a, b) => b.priority - a.priority);
      },
      updateTask(id, property, value) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
          task[property] = value;
        }
      },
    };
    return taskPlanner;
  }





// Sln Platzi:

function createTaskPlanner() {
    let tasks = [];
  
    return {
      addTask(task) {
        task.completed = false;
        tasks.push(task);
      },
  
      removeTask(value) {
        if (typeof value === "number") {
          tasks = tasks.filter((task) => task.id !== value);
        } else {
          tasks = tasks.filter((task) => task.name !== value);
        }
      },
  
      getTasks() {
        return tasks;
      },
  
      getPendingTasks() {
        return tasks.filter((task) => !task.completed);
      },
  
      getCompletedTasks() {
        return tasks.filter((task) => task.completed);
      },
  
      markTaskAsCompleted(value) {
        let index;
  
        if (typeof value === "number") {
          index = tasks.findIndex((task) => task.id === value);
        } else {
          index = tasks.findIndex((task) => task.name === value);
        }
  
        tasks[index].completed = true;
      },
  
      getSortedTasksByPriority() {
        const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
        return sortedTasks;
      },
  
      filterTasksByTag(tag) {
        return tasks.filter((task) => task.tags.includes(tag));
      },
  
      updateTask(taskId, updates) {
        const index = tasks.findIndex((task) => task.id === taskId);
        tasks[index] = { ...tasks[index], ...updates };
      },
    };
  }