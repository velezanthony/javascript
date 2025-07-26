// Se define un objeto literal llamado 'anthony' con propiedades y un método
const anthony = {
    nombre: 'Anthony',
    edad: 25,

    // Método imprimir, que muestra el nombre en consola
    imprimir() {
        console.log(`Nombre: ${ this.nombre }`);
    }
}

// Otros dos objetos similares, pero sin el método 'imprimir'
const pedro = {
    nombre: 'Pedro',
    edad: 18,
}

const melissa = {
    nombre: 'Melissa',
    edad: 24
}

// Se llama al método imprimir del objeto 'anthony'
// Imprimirá: "Nombre: Anthony"
anthony.imprimir();


// Antes de ES6 (antes de usar la palabra reservada 'class'),
// se usaban funciones constructoras para crear múltiples objetos con una estructura similar
function Persona(nombre, edad){

    // Esta línea se ejecuta cada vez que se crea una nueva instancia con 'new Persona(...)'
    console.log('Se ejecutó esta línea');

    // Asigna las propiedades al nuevo objeto que se crea con 'new'
    this.nombre = nombre;
    this.edad = edad;

    // Define el método 'imprimir' directamente dentro de cada instancia.
    // ⚠️ Esto quiere decir que cada objeto creado tendrá su propia copia del método,
    // lo cual no es eficiente en memoria si se crean muchas instancias.
    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

// Se crea una nueva instancia del "tipo" Persona
const maria = new Persona('Maria', 18);

// Se llama al método imprimir de la nueva instancia
// Imprimirá: "Nombre: Maria - edad: 18"
maria.imprimir();

// Se muestra el objeto completo en consola
// Verás algo como:
// Persona { nombre: 'Maria', edad: 18, imprimir: [Function (anonymous)] }
console.log(maria);



function Persona2(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

// Definimos el método solo una vez en el prototype
Persona2.prototype.imprimir = function(){
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
}

const jose = new Persona2('Jose', 30);
jose.imprimir(); // "Nombre: Jose - edad: 30"
