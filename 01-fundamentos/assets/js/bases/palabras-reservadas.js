// 1. **await**  
// Usado para esperar la resolución de una promesa (solo dentro de una función 'async').
async function obtenerDatos() {
  let respuesta = await fetch('https://dragonball-api.com/api/planets');
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();

// 2. **break**  
// Termina la ejecución de un bucle o una estructura switch.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Sale del bucle cuando i es igual a 5.
  }
  console.log(i);
}

// 3. **case**  
// Define una opción dentro de un switch.
let colorAnimal = 'rojo';
switch (colorAnimal) {
  case 'rojo':
    console.log('Es el color rojo');
    break;
  case 'azul':
    console.log('Es el color azul');
    break;
  default:
    console.log('Color no reconocido');
}

// 4. **catch**  
// Captura errores en una estructura try...catch.
try {
  let result = 10 / 0;
  if (result === Infinity) throw new Error('No se puede dividir por cero');
} catch (error) {
  console.log('Error:', error.message);  // Captura el error de división por cero.
}

// 5. **class**  
// Define una clase en JavaScript.
class Animal1 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let animal1 = new Animal1('Leo', 5);
animal1.saludar();  // 'Hola, soy Leo y tengo 5 años.'

// 6. **const**  
// Declara una constante cuyo valor no puede ser reasignado.
const PI = 3.14159;
console.log(PI);  // 3.14159

// 7. **continue**  
// Salta a la siguiente iteración de un bucle sin ejecutar el resto del código.
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // Salta cuando i es igual a 2.
  console.log(i);  // Imprime 0, 1, 3, 4
}

// 8. **debugger**  
// Detiene la ejecución del código y activa el depurador.
function ejemploDebug() {
  let a = 10;
  debugger;  // Aquí se detendrá el código en el depurador.
  let b = 20;
  console.log(a + b);
}
ejemploDebug();

// 9. **default**  
// Define una opción por defecto en una estructura switch.
let frutaAnimal = 'manzana';
switch (frutaAnimal) {
  case 'plátano':
    console.log('Es un plátano');
    break;
  case 'manzana':
    console.log('Es una manzana');
    break;
  default:
    console.log('Fruta no reconocida');  // Se ejecutará si no hay coincidencia.
}

// 10. **delete**  
// Elimina una propiedad de un objeto.
let persona1 = {
  nombre: 'Peter Parker',
  edad: 18,
};

delete persona1.edad;  // Elimina la propiedad 'edad' del objeto persona.
console.log(persona1);  // { nombre: 'Peter Parker' }

// 11. **do...while**  
// Define un bucle que se ejecuta al menos una vez, luego repite mientras la condición sea verdadera.
let contadorAnimal = 0;
do {
  console.log(contadorAnimal);
  contadorAnimal++;
} while (contadorAnimal < 3);  // Imprime 0, 1, 2

// 12. **else**  
// Ejecuta un bloque de código si la condición de un if es falsa.
let edadAnimal = 18;
if (edadAnimal >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}

// 13. **else if**  
// Permite evaluar condiciones adicionales en un bloque de código.
let colorAnimal2 = 'verde';
if (colorAnimal2 === 'rojo') {
  console.log('El color es rojo');
} else if (colorAnimal2 === 'verde') {
  console.log('El color es verde');  // Imprime 'El color es verde'
} else {
  console.log('Color no reconocido');
}

// 14. **export**  
// Exporta funciones, objetos o valores de un módulo.
export const saludarAnimal = (nombre) => `Hola, ${nombre}!`;

// 15. **extends**  
// Indica que una clase hereda de otra clase.
class AnimalBase {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy un ${this.nombre}`);
  }
}

class Perro extends AnimalBase {
  constructor(nombre, raza) {
    super(nombre);  // Llama al constructor de la clase base (AnimalBase)
    this.raza = raza;
  }

  saludar() {
    console.log(`Hola, soy un perro de raza ${this.raza} y me llamo ${this.nombre}`);
  }
}

let miPerro1 = new Perro('Rex', 'Labrador');
miPerro1.saludar();  // 'Hola, soy un perro de raza Labrador y me llamo Rex'

// 16. **finally**  
// Define un bloque de código que se ejecuta al final de un try...catch.
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log('Error:', error);
} finally {
  console.log('Esto se ejecuta siempre, independientemente de si hubo error o no.');
}

// 17. **for**  
// Crea un bucle que repite un bloque de código.
for (let i = 0; i < 3; i++) {
  console.log(i);  // Imprime 0, 1, 2
}

// 18. **for...in**  
// Itera sobre las propiedades enumerables de un objeto.
let persona2 = {
  nombre: 'Peter',
  edad: 18
};

for (let propiedad in persona2) {
  console.log(`${propiedad}: ${persona2[propiedad]}`);
}
// Imprime:
// nombre: Peter
// edad: 18

// 19. **for...of**  
// Itera sobre los elementos de un iterable (como un array).
let numeros2 = [1, 2, 3];
for (let num of numeros2) {
  console.log(num);  // Imprime 1, 2, 3
}

// 20. **function**  
// Declara una función.
function saludoAnimal(nombre) {
  console.log(`Hola, ${nombre}`);
}

saludoAnimal('Mundo');  // Imprime 'Hola, Mundo'

// 21. **if**  
// Evalúa una condición y ejecuta un bloque de código si la condición es verdadera.
let edadAnimal2 = 20;
if (edadAnimal2 >= 18) {
  console.log('Eres adulto');
}

// 22. **import**  
// Importa funciones, objetos o valores de otros módulos.
//import { saludarAnimal } from './saludosAnimal.js';  // Importando la función 'saludarAnimal' desde otro archivo

// 23. **in**  
// Verifica si una propiedad existe en un objeto o si un valor existe en un array.
let persona3 = { nombre: 'Juan', edad: 30 };
console.log('nombre' in persona3);  // true
console.log('apellido' in persona3);  // false

// 24. **instanceof**  
// Verifica si un objeto es una instancia de una clase o tipo.
let fecha1 = new Date();
console.log(fecha1 instanceof Date);  // true

// 25. **let**  
// Declara una variable cuyo valor puede ser reasignado.
let nombreAnimal = 'Peter';
nombreAnimal = 'Tony';
console.log(nombreAnimal);  // Tony

// 26. **new**  
// Crea una nueva instancia de un objeto.
let persona4 = new Object();
persona4.nombre = 'Juan';
persona4.edad = 30;
console.log(persona4);

// 27. **null**  
// Representa la ausencia intencional de cualquier valor u objeto.
let valorAnimal = null;
console.log(valorAnimal);  // null

// 28. **return**  
// Devuelve un valor desde una función y termina su ejecución.
function sumaAnimal(a, b) {
  return a + b;
}

console.log(sumaAnimal(2, 3));  // 5

// 29. **super**  
// Llama al constructor de la clase base (en clases que extienden otra clase).
class Animal2 {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perro2 extends Animal2 {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
}

let perro2 = new Perro2('Rex', 'Labrador');
console.log(perro2.nombre);  // Rex

// 30. **switch**  
// Evaluación de múltiples condiciones en una estructura tipo caso.
let colorAnimal3 = 'rojo';
switch (colorAnimal3) {
  case 'rojo':
    console.log('Es rojo');
    break;
  case 'azul':
    console.log('Es azul');
    break;
  default:
    console.log('Color desconocido');
}

// 31. **this**  
// Hace referencia al objeto en el contexto actual.
const persona5 = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona5.saludar();  // 'Hola, soy Juan'

// 32. **throw**  
// Lanza una excepción para ser capturada por un bloque try...catch.
try {
  throw new Error('¡Algo salió mal!');
} catch (error) {
  console.log(error.message);  // '¡Algo salió mal!'
}

// 33. **try**  
// Inicia un bloque de código que puede generar excepciones.
try {
  let resultado = 10 / 0;
  console.log(resultado);  // Infinity
} catch (error) {
  console.log('Error: División por cero');
}

// 34. **typeof**  
// Devuelve el tipo de una variable u objeto.
let numero = 10;
console.log(typeof numero);  // 'number'

// 35. **var**  
// Declara una variable cuyo valor puede cambiar, con alcance de función.
var mensajeAnimal = 'Hola';
mensajeAnimal = 'Mundo';
console.log(mensajeAnimal);  // 'Mundo'

// 36. **void**  
// Evita que una expresión devuelva un valor.
void (function() {
  console.log('Esto no devuelve nada');
})();

// 37. **while**  
// Define un bucle que se repite mientras una condición sea verdadera.
let i2 = 0;
while (i2 < 3) {
  console.log(i2);
  i2++;
}

// 38. **with**  
// Extiende el ámbito de un objeto (generalmente desaconsejado). en desuso desaconsejable
// let objAnimal = { x: 10, y: 20 };
// with (objAnimal) {
//   console.log(x + y);  // 30
// }

// 39. **yield**  
// Usado dentro de funciones generadoras para devolver un valor sin finalizar la función.
function* contadorAnimal1() {
  yield 1;
  yield 2;
  yield 3;
}

const genAnimal = contadorAnimal1();
console.log(genAnimal.next().value);  // 1
console.log(genAnimal.next().value);  // 2
console.log(genAnimal.next().value);  // 3
