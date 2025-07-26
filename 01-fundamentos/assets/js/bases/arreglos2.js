// Creación de un arreglo de juegos
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono', 123];

// Longitud del arreglo
console.log('Largo del arreglo:', juegos.length);

// Accediendo al primer y último elemento
let primero = juegos[ 2 - 2 ];  // Equivalente a juegos[0]
let ultimo = juegos[ juegos.length - 1 ];  // Último elemento del arreglo

console.log({ primero, ultimo });

// Iterando sobre el arreglo con forEach
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

// Agregar un nuevo juego al final del arreglo con push()
// `push` devuelve la nueva longitud del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

// Agregar un nuevo juego al inicio del arreglo con unshift()
// `unshift` también devuelve la nueva longitud del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Eliminar el último elemento del arreglo con pop()
// `pop` devuelve el elemento eliminado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Eliminar elementos desde una posición específica con splice()
// El primer argumento es la posición inicial, y el segundo es la cantidad de elementos a eliminar
let pos = 1; // Queremos empezar desde el segundo elemento
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// Encontrar el índice de un elemento con indexOf()
// Retorna -1 si no se encuentra el elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });
