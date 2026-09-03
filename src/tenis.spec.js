
import Tenis from "./tenis.js"

describe("Aumentar puntos", () => {
  it("Deberia mostrar Love-Love si estan empatados a 0", () => {
    let tenis= new Tenis();
    expect(tenis.obtenerScore()).toEqual("Love-Love"); 
  });
  it("Deberia mostrar 15-Love si el Jugador 1 anota un punto y Jugador 2 0", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    expect(tenis.obtenerScore()).toEqual("15-Love"); 
  });
  it("Deberia mostrar 30-Love si el Jugador 1 anota dos puntos y Jugador 2 0", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    tenis.j1Anota();
    expect(tenis.obtenerScore()).toEqual("30-Love");
  });
  it("Deberia mostrar 40-Love si el Jugador 1 anota tres puntos y Jugador 2 0", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    expect(tenis.obtenerScore()).toEqual("40-Love");
  });
  it("Deberia mostrar Game for player 1 si el Jugador 1 anota cuatro puntos", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    expect(tenis.obtenerScore()).toEqual("Game for player 1");
  });
  it("Deberia mostrar Love-15 si el Jugador 2 anota un punto", () => {
    let tenis= new Tenis();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Love-15");
  });
  it("Deberia mostrar Love-30 si el Jugador 2 anota dos puntos", () => {
    let tenis= new Tenis();
    tenis.j2Anota();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Love-30");
  });
  it("Deberia mostrar Love-40 si el Jugador 2 anota tres puntos", () => {
    let tenis= new Tenis();
    tenis.j2Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Love-40");
  });
  it("Deberia mostrar Game for player 2 si el Jugador 2 anota cuatro puntos", () => {
    let tenis= new Tenis();
    tenis.j2Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Game for player 2");
  });
  it("Deberia mostrar Deuce cuando ambos jugadores anotan tres puntos", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Deuce");
  });
  it("Deberia mostrar Deuce cuando ambos jugadores superan los tres puntos y empatan", () => {
    let tenis= new Tenis();
    for(let i=0; i<4; i++){
      tenis.j1Anota();
      tenis.j2Anota();
    }
    expect(tenis.obtenerScore()).toEqual("Deuce");
  });
  it("Deberia mostrar Advantage for player 1 cuando anota cuatro puntos y el jugador 2 tres", () => {
    let tenis= new Tenis();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j1Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    tenis.j2Anota();
    expect(tenis.obtenerScore()).toEqual("Advantage for player 1");
  });
});
