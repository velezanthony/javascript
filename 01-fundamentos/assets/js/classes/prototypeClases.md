# 🧠 JavaScript: Prototipos vs Clases (Guía Rápida)

## 🔗 Prototipos

* JS se basa en **prototipos**, no en clases tradicionales.
* Si una propiedad no está en el objeto, se busca en su **cadena de prototipos**.

```javascript
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const perro = new Animal("Rex");
perro.saludar(); // Hola, soy Rex
```

---

## 🧱 Clases (ES6)

* Las clases son solo una forma más clara y moderna de trabajar con prototipos: cambian la sintaxis, pero el comportamiento es el mismo. `azúcar sintáctico`

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const gato = new Animal("Misu");
gato.saludar(); // Hola, soy Misu
```

---

## 🧬 Herencia

### 🔧 Con Prototipos

```javascript
function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
  console.log("¡Guau guau!");
};
```

### ✅ Con Clases

```javascript
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladrar() {
    console.log("¡Guau guau!");
  }
}
```

---

## ⚙️ Estáticos & Getters/Setters

```javascript
class Calculadora {
  constructor(valor = 0) {
    this._valor = valor;
  }

  get valor() {
    return this._valor;
  }

  set valor(n) {
    if (typeof n === "number") this._valor = n;
  }

  static sumar(a, b) {
    return a + b;
  }
}
```

---

## 🧪 Verificación

```javascript
const rex = new Perro("Rex", "Labrador");

rex instanceof Perro;    // true
rex instanceof Animal;   // true
typeof Animal;           // "function"
```

---

## ⚔️ Comparativa Rápida

| Característica    | Prototipos               | Clases ES6             |
| ----------------- | ------------------------ | ---------------------- |
| Sintaxis          | Verbosa                  | Clara y moderna        |
| Herencia          | Manual (`Object.create`) | Automática (`extends`) |
| Constructor       | Función normal           | `constructor()`        |
| Métodos estáticos | Asignación directa       | `static`               |
| Hoisting          | Parcial                  | No                     |
| Rendimiento       | Igual                    | Igual                  |

---

## 🧠 Claves

* `typeof Clase === "function"`
* `extends` configura la herencia prototípica
* Métodos se agregan a `.prototype`
* `constructor()` es el inicializador de clase
* Métodos estáticos se usan desde la clase, no instancias

---

## 🧭 ¿Qué usar?

✅ **Clases**:

* Sintaxis moderna
* Herencia clara
* Proyectos colaborativos

🔧 **Prototipos**:

* Control fino
* Código legacy
* Aprender cómo funciona JS internamente

---

💡 **Importante**: Las clases hacen los prototipos más accesibles, no los reemplazan.