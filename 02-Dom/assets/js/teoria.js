let delay = 1000;

const el1 = document.querySelector('#miId');             // Selecciona por ID
const el2 = document.querySelector('.miClase');          // Selecciona por clase
const el3 = document.querySelector('div');               // Selecciona por etiqueta (el primero)
const el4 = document.querySelector('[name="nombre"]');   // Selecciona por atributo
const todos = document.querySelectorAll('.item');        // Selecciona todos los elementos que coincidan

function step0() {
const mensaje = `
🚀 ¡Bienvenido!
Esta es una app para visualizar paso a paso cómo se manipula el DOM con JavaScript.

👀 Mira la consola en todo momento para entender lo que ocurre.
Cada paso muestra una técnica diferente del DOM (crear, eliminar, modificar, navegar, etc).

⌛ Puedes elegir cuántos segundos esperar entre cada paso.

¡Comenzamos!
  `;
  alert(mensaje.trim());

  let segundos = null;

  while (isNaN(segundos) || segundos <= 0) {
    const entrada = prompt('¿Cuántos segundos deseas entre cada paso? (Ej: 1.5)');
    segundos = parseFloat(entrada);

    if (isNaN(segundos) || segundos <= 0) {
      alert('⚠️ Por favor, introduce un número mayor que 0.');
    }
  }

  delay = segundos * 1000; // Convertimos a milisegundos
}


function step1() {
  console.warn('✅ 1. Modificando contenido: innerHTML, textContent, innerText');
  el1.innerHTML = '<b>Texto</b>';
  el1.innerHTML += '<img class="imagen" src="" alt="imagen alt"/> <button disabled> button </button>';
  el2.textContent = 'Solo texto';
  el3.innerText = 'Texto visible';
}

function step2() {
  console.warn('⚙️ 2. Manipulación de atributos');
  const image = el1.querySelector('img');
  image.setAttribute('src', './assets/img/fondo.jpg')
  console.log('src:', image.getAttribute('src'));
  el1.querySelector('button').removeAttribute('disabled');
}

function step3() {
  console.warn('🎨 3. Manipulación de clases CSS');
  el2.classList.add('activo');
  el2.classList.remove('oculto');
  el2.classList.toggle('modo-claro');
  console.log('¿el2 tiene clase activo?', el2.classList.contains('activo'));
}

function step4() {
  console.warn('🆔 4. Modificar ID');
  el3.id = 'nuevoId';
  console.log('Nuevo ID de el3:', el3.id);
}

function step5() {
  console.warn('🎨 5. Modificar estilos directos');
  el1.style.color = 'red';
  el1.style.backgroundColor = 'blue';
  el1.style.fontSize = '20px';
}

function step6() {
  console.warn('🏗️ 6. Crear y añadir un nuevo div');
  const nuevoDiv = document.createElement('div');
  nuevoDiv.textContent = 'Hola desde JS';
  nuevoDiv.classList.add('alerta');
  document.body.appendChild(nuevoDiv);
  window.nuevoDiv = nuevoDiv; // guardamos global para siguientes pasos
}

function step7() {
  console.warn('❌ 7. Eliminar el nuevo div creado');
  if (window.nuevoDiv) window.nuevoDiv.remove();
}

function step8() {
  console.warn('🔁 8. Recorrer y modificar multiples elementos .item');
  const items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    item.textContent = `Item número ${index + 1}`;
  });
}

function step9() {
  console.warn('📌 9. Añadir eventos a el1 y el2');
  el1.addEventListener('click', () => alert('Elemento clicado'));
  el2.onclick = () => console.log('Clic con función flecha');
  console.log('Prueba haciendo click en #miId y .miClase');
}

function step10() {
  console.warn('📌 10. Navegación entre nodos');
  console.log('Padre de el1:', el1.parentElement);
  console.log('Hijos de el1:', el1.children);
  console.log('Primer hijo de el1:', el1.firstElementChild);
  console.log('Último hijo de el1:', el1.lastElementChild);
  console.log('Hermano siguiente de el1:', el1.nextElementSibling);
  console.log('Hermano anterior de el1:', el1.previousElementSibling);
}

function step11() {
  console.warn('📌 11. Uso de <template> y clonación');
  const template = document.querySelector('#mi-template');
  const copia = template.content.cloneNode(true);
  document.body.appendChild(copia);
}

function step12() {
  console.warn('📌 12. Propiedades del DOM');
  console.log('Tag name:', el1.tagName);
  console.log('Node type:', el1.nodeType);
  console.log('Node name:', el1.nodeName);
  console.log('InnerHTML:', el1.innerHTML);
  console.log('OuterHTML:', el1.outerHTML);
  console.log('Text content:', el1.textContent);
}

function step13() {
  console.warn('📌 13. Variables CSS desde JS');
  el1.style.setProperty('--color-principal', 'blue');
  console.log("Se añadio variable --color-principal : ", el1.style);
}

function step14() {
  console.warn('📌 14. Crear solo nodo de texto y añadir');
  const textoPuro = document.createTextNode('Texto sin HTML');
  el1.appendChild(textoPuro);
}

function step15() {
  console.warn('📌 15. Clases condicionales');
  if (!el1.classList.contains('activo')) el1.classList.add('activo');
  console.log('¿el1 tiene clase activo?', el1.classList.contains('activo'));
}

function step16() {
  console.warn('📌 16. Delegación de eventos');
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.boton-dinamico')) {
      console.log('Clic en botón generado dinámicamente');
    }
  });
}

function step17() {
  console.warn('📌 17. Focus, blur y scroll');
  el1.focus();
  setTimeout(() => el1.blur(), 1000);
  el1.scrollIntoView();
}

function step18() {
  console.warn('📌 18. Estilos computados');
  const estilos = getComputedStyle(el1);
  console.log('Color computado:', estilos.color);
}

function step19() {
  console.warn('📌 19. Uso de fragmentos para añadir varios elementos');
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < 5; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i + 1}`;
    fragmento.appendChild(p);
  }
  el1.appendChild(fragmento);
}

function step20() {
  console.warn('✅ 20. Ejemplo completo de uso con contenedor');
  const contenedor = document.querySelector('#contenedor');
  contenedor.innerHTML = '<p>Nuevo contenido</p>';
  contenedor.classList.add('activo');
  contenedor.style.border = '1px solid black';

  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = 'Parrafo dinámico';
  contenedor.appendChild(nuevoParrafo);
}


function step21() {
  console.warn('📌 21. Uso de data-attributes y dataset');
  el1.dataset.usuario = 'juan123';
  console.log('Dataset usuario:', el1.dataset.usuario);
}

function step22() {
  console.warn('📌 22. Hacer el1 editable con contentEditable');
  el1.contentEditable = "true";
  el1.style.border = '1px dashed orange';
  console.log('Elemento ahora editable (contentEditable=true)');
}

function step23() {
  console.warn('📌 23. Controlar visibilidad con hidden');
  el2.hidden = true;
  setTimeout(() => {
    el2.hidden = false;
    console.log('Elemento el2 ahora visible (hidden=false)');
  }, 3000);
}

function step24() {
  console.warn('📌 24. Uso de MutationObserver para detectar cambios en el DOM');
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      console.log('Cambio detectado:', mutation);
    }
  });
  observer.observe(el1, { childList: true, subtree: true });
  // Cambio para disparar el observer
  const nuevoTexto = document.createTextNode(' - cambio detectado');
  el1.appendChild(nuevoTexto);
}

function step25() {
  console.warn('📌 25. Manejo de foco y tabindex dinámico');
  el1.tabIndex = 0;
  el1.focus();
  setTimeout(() => {
    el1.blur();
    console.log('Focus y blur realizados');
  }, 1000);
}

function step26() {
  console.warn('📌 26. Creación y uso de Shadow DOM');
  if (!el1.shadowRoot) {
    const shadow = el1.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>p {color: red; font-weight: bold;}</style><p>Contenido en Shadow DOM</p>`;
    console.log('Shadow DOM creado');
  }
}

function step27() {
  console.warn('📌 27. Modificar atributos ARIA');
  el1.setAttribute('aria-label', 'Elemento importante para accesibilidad');
  console.log('aria-label set en el1');
}

function step28() {
  console.warn('📌 28. Reemplazar clase con classList.replace()');
  el1.classList.replace('activo', 'modo-claro');
  console.log('Clase "activo" reemplazada por "modo-claro"');
}

function step29() {
  console.warn('📌 29. Animación con Web Animations API');
  el1.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(100px)' }
  ], {
    duration: 1000,
    iterations: 1
  });
}

function step30() {
  console.warn('📌 30. Eventos personalizados (CustomEvent)');
  const eventoPersonalizado = new CustomEvent('miEvento', { detail: { info: 123 } });
  document.body.addEventListener('miEvento', e => {
    console.log('Evento personalizado recibido:', e.detail);
  });
  document.body.dispatchEvent(eventoPersonalizado);
}

const pasos = [
  step1, step2, step3, step4, step5, step6, step7, step8, step9,
  step10, step11, step12, step13, step14, step15, step16, step17, step18, step19, step20,
  step21, step22, step23, step24, step25, step26, step27, step28, step29, step30
];

step0();
pasos.forEach((fn, i) => {
  setTimeout(() => {
    fn();
  }, delay * i);
});
