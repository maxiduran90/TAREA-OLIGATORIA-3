const prompt = require('prompt-sync')();

// 1. Datos de los Empleados
const empleados = [
  {
    nombre: "Ana Gómez",
    departamento: "Ventas",
    evaluaciones: [9, 8.5, 9, 10, 8, 9, 8.5, 9, 9.5, 8, 9, 10],
    activo: true
  },
  {
    nombre: "Carlos Ruiz",
    departamento: "Soporte",
    evaluaciones: [4, 5, 3.5, 4, 4.5, 5, 4, 3, 4.5, 5, 4, 4],
    activo: true
  },
  {
    nombre: "Laura Méndez",
    departamento: "Marketing",
    evaluaciones: [7, 6.5, 8, 7.5, 7, 6, 7.5, 8, 7, 6.5, 7, 8],
    activo: false
  },
  {
    nombre: "Pedro Silva",
    departamento: "Desarrollo",
    evaluaciones: [6, 6.5, 7, 6, 5.5, 6, 6.5, 7, 6, 6, 6.5, 7],
    activo: true
  }
];

// PUNTO 1: Calcular el Promedio de las Evaluaciones de cada Empleado
const empleadosConPromedio = empleados.map(empleado => {
  const suma = empleado.evaluaciones.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / empleado.evaluaciones.length;

  return {
    ...empleado,
    promedio: Number(promedio.toFixed(2)) // Redondeamos a 2 decimales
  };
});

// PUNTO 2: Contar Empleados Excelentes (>= 8) y en Riesgo de ser Despedidos (< 5)
let excelentes = 0;
let enRiesgo = 0;

empleadosConPromedio.forEach(empleado => {
  if (empleado.promedio >= 8) {
    excelentes++;
  } else if (empleado.promedio < 5) {
    enRiesgo++;
  }
});

// PUNTO 3: Arreglo solo con Empleados Activos y Promedio >= 6
const activosAprobados = empleadosConPromedio.filter(empleado => {
  return empleado.activo === true && empleado.promedio >= 6;
});

// --- MOSTRAR RESULTADOS EN CONSOLA ---
console.log("1. Empleados con su Promedio:", empleadosConPromedio);
console.log(`2. Empleados Excelentes (>= 8): ${excelentes}`);
console.log(`   Empleados en Riesgo de ser Despédidos (< 5): ${enRiesgo}`);
console.log("3. Empleados Activos con Promedio >= 6:", activosAprobados);
