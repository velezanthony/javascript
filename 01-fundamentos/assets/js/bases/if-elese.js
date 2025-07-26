// =============================================
// Condicional simple con if-else
// =============================================

let a = 10;

if (a > 10) {
    console.log('A es mayor a 10');
} else {
    console.log('A es menor o igual a 10');
}

console.log('Fin del programa');

// =============================================
// Obtener el día actual con Date y usar if-else
// =============================================

const hoy = new Date();
let dia = hoy.getDay(); // getDay() devuelve 0 (domingo) al 6 (sábado)

console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

// =============================================
// Alternativa sin usar if-else ni switch
// Utilizando un objeto y un array para mapear días
// =============================================

dia = 6; // Simulamos que hoy es sábado (0: domingo, ..., 6: sábado)

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
};

const arrayDiasLetras = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
];

console.log(diasLetras[dia]);      // Muestra el día desde el objeto
console.log(arrayDiasLetras[dia]); // Muestra el día desde el array
