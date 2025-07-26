// Función de flecha que retorna un objeto con las propiedades 'nombre' y 'apellido'
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

// Crear una persona con 'nombre' y 'apellido' y mostrar el objeto resultante
const persona = crearPersona('Anthony', 'Velez');
console.log(persona);  // { nombre: 'Anthony', apellido: 'Velez' }


// Función tradicional que imprime todos los argumentos pasados a la función
function imprimeArgumentos() {
    console.log(arguments);  // Muestra todos los argumentos pasados a la función (es un objeto)
}

// Función de flecha que recibe un parámetro 'edad' y usa el operador 'rest' para capturar el resto de los argumentos
const imprimeArgumentos2 = (edad, ...args) => {
    // args es un arreglo con todos los valores después de 'edad'
    return args;  // Retorna los argumentos restantes
}

// Llamada a la función 'imprimeArgumentos2' y usando desestructuración para obtener valores individuales
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Anthony', 'Hola');
console.log({ casado, vivo, nombre, saludo }); // { casado: true, vivo: false, nombre: 'Anthony', saludo: 'Hola' }


// Desestructuración de un objeto para obtener una propiedad y renombrarla en el momento de la extracción
const { apellido: nuevoApellido } = crearPersona('Anthony', 'Velez');
console.log({ nuevoApellido });  // { nuevoApellido: 'Velez' }


// Objeto 'tony' con información sobre Tony Stark
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Función que desestructura el objeto 'personaje' y asigna un valor por defecto a la propiedad 'edad' si no existe
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });      // Desestructuración directa de las propiedades del objeto
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });        // Si 'edad' no está definida, se usará el valor por defecto (15)
    console.log({ trajes });
}

// Llamada a la función con el objeto 'tony'
imprimePropiedades(tony);
