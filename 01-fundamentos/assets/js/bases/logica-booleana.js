// =============================================
// Funciones que retornan booleanos con logs
// =============================================

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// =============================================
// NOT (!) - Negación lógica
// =============================================

console.warn('NOT o la negación');

console.log(true);         // true
console.log(!true);        // false
console.log(!!!!false);    // false (cuatro negaciones: !! = valor booleano, !!!! = innecesario)

console.log(!regresaFalse()); // true - ejecuta la función y niega el resultado

// =============================================
// AND (&&) - Todas deben ser verdaderas
// Cortocircuita al encontrar el primer falso
// =============================================

console.warn('AND');
console.log('==========');

console.log(regresaFalse() && regresaTrue()); // false - no evalúa regresaTrue()
console.log(regresaTrue() && regresaFalse()); // false - se ejecutan ambas

console.log('==== && con funciones =====');
regresaFalse() && regresaTrue(); // Ejecuta regresaFalse(), pero no regresaTrue()

console.log('4 condiciones con AND:', true && true && true && false); // false

// =============================================
// OR (||) - Al menos una debe ser verdadera
// Cortocircuita al encontrar el primer true
// =============================================

console.warn('OR');

console.log(true || false);     // true
console.log(false || false);    // false

console.log(regresaTrue() || regresaFalse()); // true - no se ejecuta regresaFalse()

console.log('4 condiciones con OR:', true || true || true || false); // true

// =============================================
// Asignaciones con operadores lógicos
// =============================================

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// En &&, si todas las expresiones son verdaderas, devuelve el último valor
// Si alguna es falsa, devuelve el primer falso ( `undefined`, `null`, `false`)
const a1 = true && 'Hola Mundo' && 150;           // 150
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false

// En ||, devuelve el primer valor verdadero encontrado
const a3 = soyFalso || 'Ya no soy falso';                            // 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // regresaTrue() se ejecuta porque todo antes es false

console.log({ a1, a2, a3, a4, a5 });

// =============================================
// Combinación compleja de && y || en condicional
// =============================================

if (regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
