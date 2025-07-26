// Ejemplo de valores por valor con tipos primitivos
let a = 10;     // 'a' es un valor primitivo
let b = a;      // 'b' recibe el valor de 'a' (copiado por valor)
a = 30;         // Cambiamos el valor de 'a', pero 'b' sigue siendo 10

console.log({ a, b });  // { a: 30, b: 10 }
// Los tipos primitivos (números, cadenas, booleanos, etc.) se pasan por **valor**.

// Ejemplo de valores por referencia con objetos
let juan = { nombre: 'Juan' };   // 'juan' es un objeto
let ana = { ...juan };           // Copiamos las propiedades de 'juan' a 'ana' usando spread
ana.nombre = 'Ana';              // Modificamos el nombre en 'ana'

console.log({ juan, ana });  // { juan: { nombre: 'Juan' }, ana: { nombre: 'Ana' } }
// Los objetos se pasan por **referencia**. Al modificar 'ana', no afecta a 'juan' porque usamos spread.


// Función que modifica un objeto utilizando spread para evitar la mutación
const cambiarNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';  // Cambiamos el nombre de la persona
    return persona;           // Retornamos el nuevo objeto
};

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);  // 'tony' es una copia de 'peter', modificada

console.log({ peter, tony });  // { peter: { nombre: 'Peter' }, tony: { nombre: 'Tony' } }
// El objeto 'tony' es una copia de 'peter' gracias a spread, por lo que 'peter' no se ve afectado.

// Ejemplo de clonación de arreglos usando spread
const frutas = ['Manzanas', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];  // Usamos spread para crear una copia superficial de 'frutas'
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();  // .slice() crea una copia superficial de 'frutas'
console.timeEnd('slice');

// Modificamos 'otrasFrutas' para ver cómo afecta a 'frutas'
otrasFrutas.push('Mango');   // Añadimos una nueva fruta a 'otrasFrutas'

console.table({ frutas, otrasFrutas });  // 'frutas' no se ve afectada, solo 'otrasFrutas'
