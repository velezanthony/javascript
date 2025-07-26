// =============================================
// OPERADORES TERNARIOS - PROTIPS y EJEMPLOS
// =============================================

console.warn('📌 Funciones básicas con ternario');

const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => miembro ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20, 15));             // Resultado: 20
console.log(tieneMembresia(false));       // Resultado: '10 Dólares'

// =============================================
console.warn('📌 Ternario dentro de un array');

const amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',           // Agrega 'Loki' si amigo es false
    elMayor(10, 15)                    // Resultado: 15
    // También se puede usar una función autoinvocada si es necesario:
    // (() => 'Nick Fury')()
];

console.log(amigosArr);

// =============================================
console.warn('📌 Ternario anidado para clasificaciones');

const nota = 82.5;

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado }); // Resultado: { nota: 82.5, grado: 'B' }

// =============================================
console.warn('📌 PROTIPS SOBRE TERNARIOS');

const isAdmin = false;

// ✅ Condición simple
const acceso = isAdmin ? 'Acceso total' : 'Acceso limitado';
console.log({ acceso });

const x = 4;

// 🚫 Ejemplo difícil de leer (anidado)
    // Si x > 10...
    // ...entonces, ¿x < 20?
    // Si sí, resultado = 'Medio'
    // Si no, resultado = 'Alto'
    // Si x <= 10, resultado = 'Bajo'
const resultado = x > 10 ? x < 20 ? 'Medio' : 'Alto' : 'Bajo';
console.log({ resultado });

// ✅ Mejor con sangría para legibilidad
const resultadoLegible = x > 10
    ? (x < 20 ? 'Medio' : 'Alto')
    : 'Bajo';
console.log({ resultadoLegible });

const isDarkMode = true;
const usarFuenteGrande = false;

// ✅ Uso de ternario en objetos
const config = {
    modo: isDarkMode ? 'oscuro' : 'claro',
    fuente: usarFuenteGrande ? 'grande' : 'normal'
};
console.log({ config });

const condicion = true;
const otraCondicion = false;

// ✅ Uso de ternario en arrays
const valores = [
    condicion ? 'Sí' : 'No',
    otraCondicion ? 1 : 0
];
console.log({ valores });

// ✅ Reemplazo de ternario complejo por función
const obtenerGrado = (nota) => {
    if (nota >= 95) return 'A+';
    if (nota >= 90) return 'A';
    if (nota >= 85) return 'B+';
    if (nota >= 80) return 'B';
    if (nota >= 75) return 'C+';
    if (nota >= 70) return 'C';
    return 'F';
};

console.log(obtenerGrado(87)); // Resultado: 'B+'

// =============================================
console.warn('✅ FIN DE GUÍA DE TERNARIOS');
// =============================================
