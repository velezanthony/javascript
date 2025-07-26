// =============================================
// USO DE SWITCH - APUNTES Y MEJORA DE EJEMPLO
// =============================================

const dia = 0; // 0: Domingo, 1: Lunes, ..., 6: Sábado

// El switch evalúa el valor exacto de 'dia'
// y ejecuta el bloque que coincida con el valor.
switch (dia) {
    case 0:
        console.log('Domingo');
        break; // 🚫 IMPORTANTE: si no hay break, continúa al siguiente caso

    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    case 3:
        console.log('Miércoles');
        break;

    case 4:
        console.log('Jueves');
        break;

    case 5:
        console.log('Viernes');
        break;

    case 6:
        console.log('Sábado');
        break;

    // ✅ Siempre incluye un caso por defecto
    default:
        console.log('No es un día válido de la semana');
        break;
}

// =============================================
// PROTIPS SOBRE SWITCH
// =============================================

// ✅ Úsalo cuando necesitas comparar un mismo valor contra múltiples posibles valores exactos.

// 🚫 Evita switch para rangos o condiciones complejas (usa if-else o funciones)

// ✅ Puedes agrupar múltiples casos si la acción es la misma:

const color = 'rojo';

switch (color) {
    case 'rojo':
    case 'rojo oscuro':
        console.log('Color cálido');
        break;

    case 'azul':
    case 'celeste':
        console.log('Color frío');
        break;

    default:
        console.log('Color neutro');
        break;
}

// =============================================
// FIN DE APUNTES SWITCH
// =============================================
