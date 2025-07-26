// ✅ Definición de la clase Person
class Person {

    static _count = 0;

    static get count(){
        return Person._count + 'instancias';
    }
    static message(){
        console.log(this.name);
        console.log('Hola a todos, soy un método stático');
    }
    // 🔓 Campos públicos (declarados por claridad, pero accesibles desde fuera)
    name = '';
    code = '';
    frase = '';
    food = ''; // 🍽️ Nueva propiedad: comida favorita

    /**
     * 🔧 Constructor: inicializa una nueva persona
     * @param {string} name  - Nombre real
     * @param {string} code  - Alias o identidad secreta
     * @param {string} frase - Frase célebre
     */
    constructor(name, code, frase) {
        this.name = name;
        this.code = code;
        this.frase = frase;

        Person._count++;
    }

    // 🍴 Setter para definir comida favorita, transformándola a minúsculas
    /**
     * @param {string} food
     */
    set setFood(food) {
        this.food = food.toLowerCase();
    }

    // 🍴 Getter para obtener la comida favorita
    get getFood() {
        return this.food;
    }

    // 👤 Método: quién soy
    whoIAm() {
        console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
    }

    // 💬 Método: frase característica
    myFrase() {
        console.log(`${this.name} dice: ${this.frase}`);
    }
}

// 🕷 Crear una instancia vacía (sin argumentos)
const spiderman = new Person();
console.log(spiderman); 
// Output: Person { name: '', code: '', frase: '', food: '' }

// 🛠️ Usar setter para establecer la comida favorita
spiderman.setFood = 'CHOCOLATE'; // Se guarda como 'chocolate'

// 🛠️ Usar getter para obtener la comida favorita
console.log(spiderman.getFood);  // Output: chocolate

// 💥 Agregar propiedad dinámica fuera de la clase
spiderman.villan = 'Duende Verde';
console.log(spiderman); 
// Output incluye villan: 'Duende Verde' → flexibilidad de JS

// 🦾 Crear una instancia con datos
const ironman = new Person('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(ironman); 

// ▶️ Llamar métodos
ironman.whoIAm();   // Soy Tony Stark y mi identidad es Ironman
ironman.myFrase();  // Tony Stark dice: Yo soy Ironman

// 📌 Agregar un método al prototipo (válido para todas las instancias)
Person.prototype.imprimir = function () {
    console.log(`name: ${this.name}`);
};

// ✅ Usar método agregado al prototipo
spiderman.imprimir(); // name: 

Person.count;
Person.ExternalStaticMethod = 'hola';
