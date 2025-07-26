/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9.
 * 
 * El sistema consulta si el sitio está abierto actualmente,
 * dependiendo del día y la hora.
 */

const dia = 0;          // 0: domingo, 1: lunes, ..., 6: sábado
const horaActual = 10;

let horaApertura;
let mensaje;

// Determinar hora de apertura según el día
// Fines de semana (0: domingo, 6: sábado) → 9am, de lo contrario → 11am
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// Determinar si está abierto según la hora actual
mensaje = (horaActual >= horaApertura)
    ? 'Está abierto'
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

// Mostrar resultado
console.log({ horaApertura, mensaje });
