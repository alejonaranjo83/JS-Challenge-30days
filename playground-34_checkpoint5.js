// En este ejercicio, tu objetivo es implementar un sistema de manejo de tareas utilizando patrones de diseño.

// Deberás implementar los siguientes patrones de diseño para mejorar la funcionalidad del sistema:

// Observer: Notificar a los usuarios cuando una tarea sea completada.
// Proxy: Limitar el acceso a ciertas tareas para usuarios no autorizados.
// Decorator: Agregar una funcionalidad adicional a una tarea ya existente, como una fecha límite y una etiqueta de prioridad.
// Builder: Una alternativa para crear tareas complejas con múltiples propiedades.
// Singleton: Asegurarse de que solo haya una instancia del sistema de manejo de tareas en todo el programa.
// Deberás implementar la lógica de las siguientes claseslas siguientes propiedades y métodos:

// Task (exercise.js)

// id: un identificador único para cada tarea.
// description: una descripción de la tarea.
// completed: un booleano que indica si la tarea está completada o no.
// users: un array de usuarios asignados a la tarea.
// assignUser(): un método para asignar usuarios a una tarea
// completeTask(): un método que cambia el valor de la propiedad completed a true y llama a notifyUsers().
// notifyUsers(): un método para notificar a todos los usuarios asignados que la tarea fue completada.
// User (User.js)

// name: El nombre del usuario
// notify(task): un método que recibirá una tarea y le notificará al usuario que la tarea fue completada
// Authorization (Authorization.js)

// checkAuthorization(): un método el cual verificará si un ususario está autorizado para completar una tarea.
// TaskDecorator (TaskDecorator.js)

// task: recibirá una tarea ya hecha con la clase de Task
// deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
// priority: prioridad para completar la tarea (high, medium o low)
// Priority y deadline vendrán dentro de un objeto options

// TaskBuilder(TaskBuilder.js)

// task: Instanciará la clase task creada al inicio
// Deberá tener un método por cada uno de los siguientes datos: id, description, completed, users (debe ser capaz de recibir 1 o varios users), deadline, priority.
// TaskManager (TaskManager.js)

// tasks: un array vacío para almacenar las tareas
// getInstance(): un método que devuelva una instancia de TaskManager. Si ya hay una instancia existente, devuelve esa instancia en lugar de crear una nueva.
// addTask(task): un método para agregar tareas al array que debe verificar si esta hereda de la clase Task
// getTasks(): un método que regresará todas las tareas
// getTaskById(id): un método que buscará una tarea por su id y la retornará, en caso de no existir regresará null
// Ejemplo 1:


// Input:
// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// taskManager1 === taskManager2

// Output: true

// Ejemplo 2


// Input:
// const taskManager = TaskManager.getInstance();
// const mockTask = new Task(1, "Mock task")

// taskManager.addTask(new mockTask);
// taskManager.getTasks();

// Output:
// [
//   { id: 1, description: 'Mock task', completed: false, users: [] }
// ]

// Ejemplo 3:


// Input:
// const authorization = new Authorization()
// const user1 = new User("Juan")
// const user2 = new User("Maria")
// const task = new Task('4', 'Comprar pan')
// task.assignUser(user1)

// authorization.checkAuthorization(user2, task)

// Output:
// Error("No autorizado")

// Ejemplo 4:


// Input:
// const task = new Task('5', 'Pasear al perro')
// const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

// console.log(taskDecorator)

// Output:

// {
//   task: Task {
//     id: '5',
//     description: 'Pasear al perro',
//     completed: false,
//     users: []
//   },
//   deadline: '2023-03-31',
//   priority: 'alta'
// }




// SOLUCIÓN DE PROFE EN PLATZI (no me corre en una parte):
// Abandono el reto... tengo otros intereses y oportunidades actualmente relacionadas con DataScience. Chao!


class Task{
   constructor(id, description){
     this.id = id,
     this.description = description
     this.completed = false
     this.users = []
   }
 
   assignUser(user){
     if(!(user instanceof User)){
       throw new Error("No hereda de la clase user")
     }
     this.users.push(user)
   }
 
   completeTask() {
     this.completed = true;
     this.notifyUsers()
   }
 
   notifyUsers() {
     this.users.forEach((user) => {
       user.notify(this);
     });
   }
 }




class Authorization {
   checkAuthorization(user, task) {
     if (!task.users.includes(user)) {
       throw new Error("No autorizado");
     }
   }
 }



class TaskBuilder {
   constructor() {
     this.task = new Task();
   }
 
   setId(id) {
     this.task.id = id;
     return this;
   }
 
   setDescription(description) {
     this.task.description = description;
     return this;
   }
 
   setCompleted(completed) {
     this.task.completed = completed;
     return this;
   }
 
   setUsers(users) {
     for (const user of users) {
       this.task.assignUser(user);
     }
     return this;
   }
 
   setDeadline(deadline) {
     this.task.deadline = deadline;
     return this;
   }
 
   setPriority(priority) {
     this.task.priority = priority;
     return this;
   }
 
   build() {
     return this.task;
   }
}
 



class TaskDecorator {
   constructor(task, options) {
     this.task = task
     this.deadline = options.deadline;
     this.priority = options.priority;
   }
 
   assignUser(user) {
     this.task.assignUser(user);
   }
 
   completeTask() {
     this.task.completeTask();
   }
 
   notifyUsers() {
     this.task.notifyUsers();
   }
 }



class TaskManager {
   constructor() {
     this.tasks = []
   }
 
   static getInstance() {
     if (!TaskManager.instance) {
       TaskManager.instance = new TaskManager();
     }
     return TaskManager.instance;
   }
 
   addTask(task){
     this.tasks.push(task)
   }
 
   getTasks(){
     return this.tasks
   }

   getTaskById(id){
       const task = this.tasks.filter(task => task.id === id)[0]
       if(task){
         return task
       }
   
       return null
     }
   
}




class User {
   constructor(name) {
     this.name = name;
   }
 
   notify(task) {
     console.log(`Usuario ${this.name}: La tarea "${task.description}" ha sido completada.`);
   }
 }









// Input 1:
// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// taskManager1 === taskManager2

// Output: true



// Input 2:
// const taskManager = TaskManager.getInstance();
// const mockTask = new Task(1, "Mock task")

// taskManager.addTask(new mockTask);
// taskManager.getTasks();

// Output:
// [
//   { id: 1, description: 'Mock task', completed: false, users: [] }
// ]




// Input 3:
// const authorization = new Authorization()
// const user1 = new User("Juan")
// const user2 = new User("Maria")
// const task = new Task('4', 'Comprar pan')
// task.assignUser(user1)

// authorization.checkAuthorization(user2, task)

// Output:
// Error("No autorizado")




// Input 4:
// const task = new Task('5', 'Pasear al perro')
// const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })

// console.log(taskDecorator)

// Output:

// {
//   task: Task {
//     id: '5',
//     description: 'Pasear al perro',
//     completed: false,
//     users: []
//   },
//   deadline: '2023-03-31',
//   priority: 'alta'
// }




