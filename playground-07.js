// En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

// Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

// name: El nombre del estudiante
// grades: Las notas de cada materia del estudiante
// A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

// Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇

// const number = 100.32433;
// number.toFixed(2); // "100.32"

// 👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

// Ejemplo:

// Input: getStudentAverage([
//   {
//     name: "Pedro",
//     grades: [90, 87, 88, 90],
//   },
//   {
//     name: "Jose",
//     grades: [99, 71, 88, 96],
//   },
//   {
//     name: "Maria",
//     grades: [92, 81, 80, 96],
//   },
// ])

// Output: {
//   classAverage: 88.17,
//   students: [
//     {
//       name: "Pedro",
//       average: 88.75
//     },
//     {
//       name: "Jose",
//       average: 88.5
//     },
//     {
//       name: "Maria",
//       average: 87.25
//     }
//   ]
// }






// Sln con Chat GPT3 después de explorar alternativa de manera autónoma:
function getStudentAverage(students) {
  let total = 0; //variable que almacenará la suma total de las calificaciones promediadas de los estudiantes
  let gradesAmount = 0; //denominador que se usará para calcular el promedio
  let studentsFinal = []; //arreglo que recibirá los objetos de cada estudante con su nombre y promedio respectivo

  for (let e = 0; e < students.length; e++) { //recorra cada estudiante de la lista...
    let grades = students[e].grades; //lea las notas de cada estudiante
    let average = 0; //inicialice esta variable en 0, la cual va a recibir la suma de calificaciones

    gradesAmount++ // cada que aparezca un estudiante, sume una unidad al denominador que se usará para calcular el promedio de la clase

    for (let a = 0; a < grades.length; a++) {//recorra las califiaciones de c/estudiante y súmelo a la calificación
      average += grades[a]; //esto es igual a: average = average + grades[a]... actualiza el valor de la variable "average"
    }

    average = Number((average / grades.length).toFixed(2)); //calcule el promedio de calificaciones de c/estudiante, redondeándolo a 2 decimales y convirtiéndolo a un valor de tipo número
    studentsFinal.push({ //agregue su nombre y promedio a la lista creada para esto
      name: students[e].name, 
      average: average});
      total += average; //agregue el promedio de c/estudiante al total de la clase
  }

  let classAverage = total / gradesAmount;//calcule el promedio de la clase
  classAverage = Number(classAverage.toFixed(2)); //redondee el promedio de la clase a 2 decimales y conviértalo a una variable de tipo "Número"
  
  // console.log(studentsFinal);
  // console.log(classAverage);

  // Devuelva un objeto que contenga el promedio de la clase y la lista de objetos de estudiantes con su promedio
  return {classAverage: classAverage, students: studentsFinal};
}





Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])