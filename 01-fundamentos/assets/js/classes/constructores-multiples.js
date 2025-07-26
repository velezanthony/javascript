// 👤 Clase Persona
class Persona {

    /**
     * 🏗️ Método estático "porObjeto"
     * Emula un constructor alternativo que recibe un objeto como argumento.
     * @param {Object} param0 - Objeto con las propiedades nombre, apellido, pais
     * @returns {Persona} Nueva instancia de Persona
     */
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    /**
     * 🔧 Constructor principal: recibe los datos como parámetros separados
     * @param {string} nombre
     * @param {string} apellido
     * @param {string} pais
     */
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    // 📋 Método para mostrar información formateada
    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

// 🔤 Variables individuales
const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

// 🧾 Objeto con propiedades coincidentes
const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}

// 👤 Crear persona con constructor tradicional
const persona1 = new Persona(nombre1, apellido1, pais1);

// 👤 Crear persona a partir de un objeto (constructor alternativo)
const persona2 = Persona.porObjeto(fher);

// 📢 Mostrar info de ambas instancias
persona1.getInfo(); // info: Melissa, Flores, Honduras
persona2.getInfo(); // info: Fernando, Herrera, Costa Rica
