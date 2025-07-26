// 🧑‍💼 Clase base: Persona
class Persona {

    // 🧮 Propiedad estática para contar instancias
    static _conteo = 0;

    // 📊 Getter estático: devuelve el número de instancias creadas
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    // 📢 Método estático: se llama desde la clase, no desde instancias
    static mensaje() {
        console.log(this.nombre); // undefined → no hay "this" de instancia aquí
        console.log('Hola a todos, soy un método estático');
    }

    // 🧍‍♂️ Propiedades públicas
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    /**
     * 🔧 Constructor de Persona
     * @param {string} nombre - nombre real
     * @param {string} codigo - alias o nombre clave
     * @param {string} frase  - frase célebre
     */
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; // Cada vez que se crea una nueva persona, aumenta el conteo
    }

    // 🍽️ Setter: transforma la comida a MAYÚSCULAS
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    // 🍽️ Getter: devuelve la comida favorita formateada
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // 👤 Método: muestra nombre e identidad
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    // 💬 Método: muestra la frase y llama internamente a quienSoy()
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// 🦸‍♂️ Subclase: Heroe extiende Persona (hereda propiedades y métodos)
class Heroe extends Persona {

    clan = 'sin clan'; // 🏰 Nueva propiedad específica de Heroe

    /**
     * 👨‍👦 Constructor de Heroe
     * Hereda el constructor de Persona usando `super()`
     */
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); // 🔁 Llama al constructor de Persona
        //antes de usar this --> primero llamar a super
        this.clan = 'Los Avengers';   // 🔗 Inicializa propiedad adicional
    }

    // 🔄 Sobrescritura (override) del método quienSoy()
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`); // comportamiento extendido
        super.quienSoy(); // 🔁 También se llama al método original de la clase base
    }
}

// 🕷 Crear una instancia de Heroe
const spiderman = new Heroe(
    'Peter Parker',
    'Spiderman',
    'Soy tu amigable vecino Spiderman'
);

// Mostrar el objeto completo
console.log(spiderman);

// Llamar al método sobrescrito
spiderman.quienSoy();
