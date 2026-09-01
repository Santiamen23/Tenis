
import Tenis from "./tenis.js"

describe("Aumentar puntos", () => {
  it("Deberia mostrar Love-Love si estan empatados a 0", () => {
    let tenis= new Tenis();
    expect(tenis.obtenerScore()).toEqual("Love-Love"); 
  });
});
