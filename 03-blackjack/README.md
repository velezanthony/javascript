# 03 - BlackJack 🃏

Este módulo implementa el clásico juego de **BlackJack (21)** usando JavaScript moderno y el **Patrón Módulo (IIFE)** para encapsular la lógica y evitar contaminación global.

## 🎯 Objetivos del ejercicio

- Aplicar programación modular en JavaScript
- Controlar el flujo del juego mediante eventos del DOM
- Manipular dinámicamente el DOM para mostrar cartas y puntuaciones
- Implementar funciones puras (`crearDeck`, `cardValue`, etc.)
- Gestionar la lógica de turnos entre jugador y computadora

---

## 🔧 Características técnicas

- **Encapsulación:** Toda la lógica está dentro de una función autoejecutable (`IIFE`), exponiendo únicamente `NewGame`.
- **Baraja dinámica:** Construye un mazo completo de 52 cartas (2–10, J, Q, K, A) en 4 palos (`C`, `D`, `H`, `S`) y lo baraja aleatoriamente.
- **Lógica de juego:**
  - El jugador puede pedir cartas o plantarse.
  - Las cartas se valoran automáticamente (A=11 o 1, J/Q/K=10).
  - La computadora juega automáticamente tras el turno del jugador.
  - Se evalúa y muestra el resultado al finalizar.
- **Renderizado:** Las cartas se muestran mediante imágenes agregadas dinámicamente al DOM.
- **Control de botones:** Los botones se habilitan o deshabilitan según el estado del juego.
- **Modal de resultado:** Se muestra un modal indicando el ganador o empate.

---

## 🧪 Estructura básica del módulo

- `crearDeck()` – Crea y baraja el mazo.
- `requestCard()` – Obtiene una carta del mazo.
- `cardValue(card, currentScore)` – Devuelve el valor de una carta, considerando el valor variable del As.
- `renderCard(card, container)` – Inserta la carta en el DOM.
- `playerDrawCard()` – Lógica para que el jugador tome cartas.
- `computerGame()` – Turno automático para la computadora.
- `getWinner()` – Determina el ganador.
- `resetGame()` – Reinicia el estado para una nueva partida.

---

## 🕹️ Controles del juego

- **Nuevo Juego** (`#btnNewGame`): Reinicia la partida.
- **Pedir Carta** (`#btnRequest`): El jugador solicita una carta.
- **Detener** (`#btnStop`): Finaliza el turno del jugador y comienza el de la computadora.

---

## 📌 Buenas prácticas demostradas

- Diseño modular con IIFE para encapsulamiento
- Manejo avanzado de eventos del DOM
- Uso de funciones puras para lógica reutilizable
- Manipulación dinámica del DOM con imágenes y texto
- Gestión de estados y control de UI según flujo del juego
