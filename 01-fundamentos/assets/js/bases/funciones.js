// Función tradicional: Definida con la palabra clave 'function'
function saludar(nombre) {
    console.log(arguments);  // 'arguments' es un objeto especial que contiene todos los argumentos pasados a la función
    console.log('Hola Mundo ' + nombre);  // Mostrar un saludo con el nombre proporcionado
}

// Función expresada: Asignada a una variable
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);  // Mostrar un saludo con el nombre proporcionado
};

// Función flecha simple sin parámetros
const saludarFlecha = () => {
    console.log('Hola Flecha');  // Mostrar un saludo fijo
};

// Función flecha con un parámetro. Es preferible mantener los paréntesis por legibilidad.
const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha ' + nombre);  // Mostrar un saludo con el nombre proporcionado
};

// Llamadas a las funciones, mostrando cómo se manejan múltiples argumentos con funciones tradicionales
saludar('Anthony', 40, true, 'Costa Rica'); // Usando 'arguments' en la función tradicional para ver todos los parámetros
saludar2('Anthony');                       // Función expresada, solo un argumento
saludarFlecha();                           // Función flecha sin parámetros
saludarFlecha2('Anthony');                // Función flecha con un parámetro

// Muestra el resultado de la función 'saludar'
console.log(saludar('dvsdvsd')); // 'saludar' devuelve undefined porque no tiene un valor de retorno

// Función que suma dos números
function sumar(a, b) {
    return a + b;  // Retorna la suma de 'a' y 'b'
}
console.log( sumar(1,2)); //retorna 3

// Función flecha que suma dos números (más concisa)
const sumar2 = (a, b) => a + b;  // Función flecha de una sola línea, sin necesidad de 'return' explícito
console.log( sumar2(1,2)); // devuelve 3 func arrow en una linea

// Función que genera un número aleatorio
function getAleatorio() {
    return Math.random();  // Devuelve un número aleatorio entre 0 y 1
}

// Función flecha equivalente a getAleatorio (sin llaves porque solo hay una expresión)
const getAleatorio2 = () => Math.random();  // Función de flecha sin llaves, cuando solo se tiene una expresión

// Ejecución de funciones
console.log(getAleatorio2());  // Mostrar el número aleatorio generado por getAleatorio2
