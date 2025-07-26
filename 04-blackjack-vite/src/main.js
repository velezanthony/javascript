import './style.css'
import htmlPage from './blackjack/index.html?raw';

document.querySelector('#app').innerHTML = htmlPage;


// 👇 Este import dinámico se ejecuta después de que el DOM está actualizado
import('./blackjack/index.js').then(() => {
  console.log('Lógica de Blackjack cargada');
});