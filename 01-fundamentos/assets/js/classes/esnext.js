// 📦 Clase que representa un rectángulo
class Rectangulo {

    // 🔐 Campo privado: solo accesible dentro de la clase
    #area = 0;

    /**
     * 🔧 Constructor: recibe base y altura para inicializar el rectángulo
     * @param {number} base   - Base del rectángulo
     * @param {number} altura - Altura del rectángulo
     */
    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        // ⚙️ Calcula el área y la almacena en el campo privado
        this.#area = base * altura;
    }

    /**
     * 📐 Método público que muestra el doble del área
     * (solo para demostrar acceso a campo privado)
     */
    calgularArea() {
        console.log(this.#area * 2);
    }
}

// 🧪 Crear una instancia del rectángulo con base = 10 y altura = 15
const rectangulo = new Rectangulo(10, 15);

// ❌ No se puede acceder directamente a campos privados:
// rectangulo.#area = 100; // ⛔ Error de sintaxis

// ✅ Usar método público para mostrar resultado
rectangulo.calgularArea(); // Output: 300

// 🔍 Ver el objeto en consola (el área no aparece porque es privado)
console.log(rectangulo);
