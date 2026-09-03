import Tenis from './tenis.js';

let tenis = new Tenis();
const marcador = document.querySelector('#resultado-div');
const jugador1Button = document.querySelector('#j1-button');
const jugador2Button = document.querySelector('#j2-button');
const resetButton = document.querySelector('#reset-button');

function actualizarMarcador() {
  marcador.textContent = tenis.obtenerScore();
}

jugador1Button.addEventListener('click', () => {
  tenis.j1Anota();
  actualizarMarcador();
});

jugador2Button.addEventListener('click', () => {
  tenis.j2Anota();
  actualizarMarcador();
});

resetButton.addEventListener('click', () => {
  tenis = new Tenis();
  actualizarMarcador();
});
