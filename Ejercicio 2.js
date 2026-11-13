const prompt = require('prompt-sync')();

// Arreglo de objetos de estudiantes
const estudiantes = [
  { nombre: "Ana", calificacion: 9.5 },
  { nombre: "Carlos", calificacion: 5.0 },
  { nombre: "Elena", calificacion: 6.0 },
  { nombre: "David", calificacion: 4.5 },
  { nombre: "Sofía", calificacion: 9.0 },
  { nombre: "Lucía", calificacion: 3.2 }
];

// 1) Mostrar los nombres de los Estudiantes Aprobados (calificación >= 6)
console.log("=== Estudiantes Aprobados ===");
estudiantes
  .filter(estudiante => estudiante.calificacion >= 6)
  .forEach(estudiante => console.log(estudiante.nombre));

// 2) Contar y mostrar la cantidad de Estudiantes Reprobados (calificación < 6)
const reprobados = estudiantes.filter(estudiante => estudiante.calificacion < 6);

console.log(`\nCantidad de Estudiantes Reprobados: ${reprobados.length}`);
console.log("Nombres de Reprobados:", reprobados.map(e => e.nombre));
