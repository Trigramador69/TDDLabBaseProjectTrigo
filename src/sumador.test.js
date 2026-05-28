import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it('retorna 0 para cadena vacia ""', () => {
    expect(sumar("")).toEqual(0);
  });

  it('retorna el numero para cadena con un solo numero "2"', () => {
    expect(sumar("2")).toEqual(2);
  });

  it('suma dos numeros en cadena separados por coma "1,2"', () => {
    expect(sumar("1,2")).toEqual(3);
  });
});


