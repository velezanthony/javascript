// =============================================
// WHILE y DO WHILE - APUNTES Y EJEMPLOS
// =============================================

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('📌 While loop');

// WHILE:
// Evalúa la condición antes de ejecutar el bloque
// Solo se ejecuta si la condición es verdadera

// Este while imprime todos los carros excepto el de índice 1 (Mazda)
// porque usamos 'continue' para saltarlo
while (carros[i]) {
    if (i === 1) {
        i++;            // Muy importante: incrementar antes del continue
        continue;       // Salta el resto del bloque si i === 1
    }

    console.log(carros[i]);
    i++;                // Incremento del índice
}

// Resultado:
// Ford
// Honda
// Toyota

// =============================================
console.warn('📌 Do While loop');

let j = 10;

// DO WHILE:
// Siempre ejecuta el bloque **al menos una vez**, incluso si la condición es falsa

do {
    console.log(carros[j]); // carros[10] es undefined
    j++;
} while (carros[j]);

// Resultado:
// undefined
// El loop NO entra otra vez porque carros[11] también es undefined

// =============================================
// PROTIPS WHILE vs DO WHILE
// =============================================

// WHILE → Usa cuando quieres ejecutar solo si la condición inicial es verdadera
// DO WHILE → Usa cuando necesitas que el bloque se ejecute **al menos una vez**

// Ambas estructuras requieren cuidado con:
// - condiciones de salida (evitar loops infinitos)
// - incremento/decremento de índices

// =============================================
// FIN DE APUNTES WHILE / DO WHILE
// =============================================
