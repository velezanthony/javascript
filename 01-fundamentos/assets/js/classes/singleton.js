// 🧱 Clase Singleton: asegura que solo haya UNA instancia
class Singleton {

    // 🗂️ Propiedad estática para almacenar la única instancia
    static instancia;

    // 🔓 Propiedad pública
    nombre = '';

    /**
     * 🔧 Constructor: si ya hay una instancia, la devuelve en lugar de crear una nueva.
     * @param {string} nombre - Nombre asignado a la instancia
     */
    constructor(nombre = '') {
        // ⚠️ Si ya existe una instancia, se retorna y se ignora el nuevo 'nombre'
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        // 🆕 Si no existe, se guarda la nueva instancia y se asigna el nombre
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

// 🧪 Se crean varias "instancias", pero en realidad todas apuntan a la misma
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

// 🧾 Aunque se pasaron diferentes nombres, solo el primero se guarda
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`); // Ironman
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`); // Ironman
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`); // Ironman
