// Definiendo un objeto literal 'personaje'
const personaje = {
    nombre: 'Tony Stark',      // Propiedad: nombre del personaje
    codeName: 'Ironman',       // Propiedad: nombre de código
    vivo: false,               // Propiedad: estado de vida (true/false)
    edad: 40,                  // Propiedad: edad del personaje
    coords: {                  // Propiedad: coordenadas geográficas
        lat: 34.034,           // Latitud
        lng: -118.7            // Longitud
    },
    trajes: [                  // Propiedad: lista de trajes
        'Mark I', 
        'Mark V', 
        'Hulkbuster'
    ],
    direccion: {               // Propiedad: dirección del personaje
        zip: '10880, 90265',   // Código postal
        ubicacion: 'Malibu, California' // Ubicación específica
    },
    "ultima-pelicula": 'Infinity War'  // Propiedad con un nombre con guion
};

// Imprimir todo el objeto 'personaje' en la consola
console.log(personaje);

// Acceder a las propiedades del objeto utilizando notación de punto
console.log('Nombre:', personaje.nombre);            // Acceso a la propiedad 'nombre'
console.log('Edad:', personaje.edad);                // Acceso a la propiedad 'edad'
console.log('Coordenadas:', personaje.coords);       // Acceso al objeto anidado 'coords'
console.log('Latitud:', personaje.coords.lat);       // Acceso a la propiedad 'lat' dentro de 'coords'
console.log('Número de Trajes:', personaje.trajes.length);  // Cantidad de elementos en el arreglo 'trajes'
console.log('Último Traje:', personaje.trajes[personaje.trajes.length - 1]);  // Último traje en el arreglo

// Usando notación de corchetes con una variable para acceder a la propiedad
const x = 'vivo';
console.log('¿Está vivo?', personaje[x]);  // Acceso a la propiedad 'vivo' utilizando la variable 'x'

// Acceso a propiedades con guiones usando notación de corchetes
console.log('Última película:', personaje['ultima-pelicula']);  // Acceso a la propiedad 'ultima-pelicula'

// Eliminando una propiedad del objeto usando delete
delete personaje.edad;
console.log('Después de eliminar la propiedad edad:', personaje);

// Añadiendo una nueva propiedad al objeto
personaje.casado = true;
console.log('Después de agregar la propiedad casado:', personaje);

// Obtener las entradas del objeto como un arreglo de pares [clave, valor]
const entriesPares = Object.entries(personaje);
console.log('Entradas del objeto:', entriesPares);

// Hacer que el objeto sea inmutable con Object.freeze()
Object.freeze(personaje);  // Esto previene la asignación de nuevas propiedades y cambios en propiedades existentes

// Intentamos modificar el objeto congelado (no tendrá efecto debido a Object.freeze())
personaje.dinero = 4524524545245;  // No se añadirá
personaje.casado = false;          // No se cambiará
personaje.direccion.ubicacion = 'Costa Rica';  // Esta propiedad se puede cambiar porque es un objeto anidado
console.log('Después de intentar modificar un objeto congelado:', personaje);

// Obtener todas las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log('Propiedades y valores:', { propiedades, valores });
