const prompt = require('prompt-sync')();

const inventario = [
  { nombre: "Televisor 50 pulgadas", categoria: "Tecnología", precio: 1800450 },
  { nombre: "Sartén Antiadherente", categoria: "Hogar", precio: 30500 },
  { nombre: "Auriculares Bluetooth", categoria: "Tecnología", precio: 80000 },
  { nombre: "Juego de Sábanas", categoria: "Hogar", precio: 5000 },
  { nombre: "Laptop", categoria: "Tecnología", precio: 1000000 },
  { nombre: "Lámpara de Mesa", categoria: "Hogar", precio: 2500 }
];

// 1) Mostrar solo los Productos de la categoría "Tecnología"
const productosTecnologia = inventario.filter(producto => producto.categoria === "Tecnología");

console.log("Productos de Tecnología:");
console.log(productosTecnologia);

// 2) Sumar el Precio de todos los Productos de la categoría "Hogar" y mostrar el Total
const totalHogar = inventario
  .filter(producto => producto.categoria === "Hogar")
  .reduce((acumulador, producto) => acumulador + producto.precio, 0);

console.log(`El Precio Total de los productos del hogar es: $${totalHogar}`);
