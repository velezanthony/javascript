// 1. **String**  
// Las cadenas de texto se pueden definir con comillas simples (' '), dobles (" ") o backticks (` `).
// Los backticks permiten hacer interpolación de variables dentro de la cadena (template literals).
let nombre = 'Peter Parker';
console.log(nombre);  // 'Peter Parker'

// Puedes cambiar el valor de la variable 'nombre' en cualquier momento.
nombre = 'Ben Parker';  // Se usa comillas simples para mejorar legibilidad.
console.log(nombre);  // 'Ben Parker'

// También puedes usar comillas dobles o backticks para definir el string.
nombre = `Tía May`;  // Se puede usar backticks para interpolación o multilinea.
console.log(typeof nombre);  // 'string' (tipo de dato de 'nombre')

// 2. **Number**  
// El tipo 'number' en JavaScript abarca tanto enteros como decimales (flotantes).
let edad = 33;
console.log(typeof edad);  // 'number'

// Puedes asignar un número decimal sin ningún problema.
edad = 33.0001;
console.log(typeof edad);  // 'number'

// 3. **Boolean**  
// Los valores booleanos solo pueden ser 'true' o 'false'. JavaScript es sensible a mayúsculas y minúsculas.
let esMarvel = false;  // Recuerda que 'false' siempre debe ser en minúsculas.
console.log(typeof esMarvel);  // 'boolean'

// 4. **Undefined**  
// Cuando declaras una variable sin asignarle un valor, su valor por defecto es 'undefined'.
// Esto significa que la variable ha sido declarada pero no inicializada.
let superPoder;
console.log(typeof superPoder);  // 'undefined'

// 5. **Null**  
// Aunque 'null' es un tipo primitivo que indica la ausencia de valor, históricamente se consideraba un objeto (error por compatibilidad).
let soyNull = null;
console.log(typeof soyNull);  // 'object' (bug histórico)

// 6. **Symbol**  
// Los 'Symbols' son valores únicos e inmutables, utilizados principalmente como claves únicas para propiedades de objetos.
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(typeof symbol1);  // 'symbol'

// 7. **Comparación entre null y undefined**  
// Aunque 'null' y 'undefined' representan la ausencia de valor, tienen diferencias sutiles.  
// 'undefined' se asigna cuando una variable no tiene valor, mientras que 'null' se asigna explícitamente como un valor vacío.
let var1;  // undefined (no ha sido asignado)
let var2 = null;  // null (valor explícito de ausencia de valor)
console.log(var1 == var2);  // true (en comparación abstracta, ambos representan ausencia de valor)
console.log(var1 === var2);  // false (en comparación estricta, son diferentes tipos)

// 8. **Uso de comillas**  
// Se pueden usar tanto comillas simples como dobles en JavaScript para declarar cadenas de texto.
// Sin embargo, el uso de backticks (` `) es preferible cuando necesitas interpolar variables dentro de la cadena o usar saltos de línea.
let saludo = `Hola, ${nombre}!`;  // Interpolación de variables en una cadena de texto.
console.log(saludo);  // 'Hola, Tía May!'
