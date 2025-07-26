# 04 - BlackJack con Vite ⚡

Este módulo es una **reimplementación del juego BlackJack** utilizando **Vite** como entorno de desarrollo moderno. A diferencia de la versión anterior basada en HTML y scripts globales, aquí se aplica una **arquitectura modular real** con **separación de responsabilidades**, aprovechando `ESModules` y un flujo de desarrollo más eficiente.

## 🎯 Objetivos principales

* Organizar el proyecto con **Vite** y su sistema de módulos
* Separar responsabilidades en archivos reutilizables (usecases)
* Mantener el DOM y la lógica desacoplados
* Simular un entorno real de desarrollo frontend moderno
* Mejorar la escalabilidad del proyecto

---

## 📦 Estructura del proyecto

```bash
04-blackjack-vite/
├── public/                    # Archivos estáticos (cartas .png, favicon, etc.)
├── src/
│   └── blackjack/
│       ├── usecases/         # Lógica del juego dividida en funciones
│       ├── index.html        # Plantilla HTML del juego
│       └── index.js          # Punto de entrada principal del juego
├── dist/                     # Archivos generados al compilar
├── index.html                # Entrada principal del proyecto (Vite)
├── package.json              # Configuración y scripts del proyecto
└── vite.config.js            # Configuración opcional de Vite
```

---

## 🔧 Funcionalidades clave

* **Modularidad real:** Cada acción del juego (como pedir carta, calcular el valor, reiniciar, etc.) está definida en su propio archivo dentro de `usecases/`
* **Importación dinámica:** Se carga el módulo del juego (`index.js`) solo cuando el DOM ya está listo
* **Uso de HTML raw:** El archivo HTML del juego se importa como string y se inyecta dinámicamente (`import htmlPage from './index.html?raw'`)
* **Separación total:** HTML, JS y assets están completamente separados para un mantenimiento más claro

---

## 📜 Usecases disponibles

Cada funcionalidad clave está encapsulada en funciones reutilizables dentro de `src/blackjack/usecases/`, como:

* `create-deck.js` – Genera y baraja el mazo
* `card-value.js` – Calcula el valor de una carta
* `render-card.js` – Agrega una carta visual al DOM
* `drawCardForPlayer.js` – Turno del jugador
* `computer-game.js` – Turno automatizado de la computadora
* `get-winner.js` – Lógica para determinar el ganador
* `reset-game.js` – Reinicia la partida
* `modal.js` – Muestra el resultado en pantalla

---

## 🕹️ Controles del juego

* **Nuevo Juego** (`#btnNewGame`) – Reinicia todo el estado del juego
* **Pedir Carta** (`#btnRequest`) – Añade una carta al jugador
* **Detener** (`#btnStop`) – Finaliza turno y pasa a la computadora

---

## 🚀 Cómo iniciar el proyecto

Desde la raíz del proyecto `04-blackjack-vite/`, ejecutá los siguientes comandos:

```bash
npm install      # Instala las dependencias
npm run dev      # Inicia el servidor de desarrollo (vite)
```

Esto abrirá el juego en el navegador en `http://localhost:5173` o el puerto que indique la terminal.

---

## ✅ ¿Por qué usar Vite?

* Carga ultrarrápida del proyecto (hot reload)
* Compatible con módulos ES6 sin configuración adicional
* Ideal para escalar el juego hacia proyectos más grandes
* Permite migrar fácilmente a frameworks modernos (React, Vue, etc.)

---
Claro, aquí te dejo una versión mejorada y más clara de las instrucciones para iniciar y compilar el proyecto con npm y Vite, ideal para tu sección 04:

---

### 🚀 Cómo iniciar y construir el proyecto

1. **Instalar dependencias**
   Ejecuta este comando para instalar todas las librerías necesarias:

   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   Levanta el proyecto en modo desarrollo con hot reload en vivo:

   ```bash
   npm run dev
   ```

   Después de ejecutar, abre en tu navegador la URL que indica la terminal (generalmente `http://localhost:5173`).

3. **Generar build de producción**
   Para compilar y optimizar los archivos listos para producción, ejecuta:

   ```bash
   npm run build
   ```

   Los archivos optimizados se generarán dentro de la carpeta `dist/`, listos para desplegar en cualquier servidor.

---