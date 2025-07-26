const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

// =============================================
// TIPOS DE FOR EN JAVASCRIPT
// =============================================

console.warn('📌 For tradicional');

// El for clásico te da control total sobre el índice
// Ideal cuando necesitas saber la posición o manipular el índice
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// =============================================
console.warn('📌 For in');

// Recorre los **índices** del array (como strings)
// No recomendado para arrays si solo necesitas los valores
// ⚠️ Más comúnmente usado con objetos
for (let i in heroes) {
    console.log('indice: ', i);
    console.log(heroes[i]); // i es el índice
}

// =============================================
console.warn('📌 For of');

// Recorre directamente los **valores** del array
// Más limpio y legible cuando solo te interesa el valor
for (let heroe of heroes) {
    console.log(heroe); // heroe es el valor, no el índice
}

// =============================================
// PROTIPS SOBRE FOR
// =============================================

// ✅ Usa for clásico si necesitas:
// - Saber la posición (índice)
// - Saltarte elementos (i += 2, continue, etc.)
// - Modificar elementos por índice

// ✅ Usa for...of cuando:
// - Solo necesitas el valor
// - Quieres código más limpio y moderno

// 🚫 Evita for...in con arrays:
// - Está pensado para objetos
// - Recorre claves enumerables, no garantiza orden

// Ejemplo correcto de for...in en objetos:
console.warn('📌 For in con objetos');

const personaje = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    alias: 'Batman'
};

for (let clave in personaje) {
    console.log(`${clave}: ${personaje[clave]}`);
}

// =============================================
// FIN DE APUNTES FOR
// =============================================
