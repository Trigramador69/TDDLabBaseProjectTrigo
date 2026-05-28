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

  it('suma varios numeros en cadena separados por coma "1,2,3"', () => {
    expect(sumar("1,2,3")).toEqual(6);
  });

  it('tambien permite guion como separador "1-2,3"', () => {
    expect(sumar("1-2,3")).toEqual(6);
  });

  it('permite delimitador personalizado "//[;] 6;7;4"', () => {
    expect(sumar("//[;] 6;7;4")).toEqual(17);
  });

  it('permite delimitador personalizado mezclado con coma y guion', () => {
    expect(sumar("//[;] 6,3-2;1")).toEqual(12);
  });

  it('ignora numeros mayores a 1000', () => {
    expect(sumar("2,1001")).toEqual(2);
  });

  it('permite delimitador personalizado de longitud variable', () => {
    expect(sumar("//[***] 1***2***3")).toEqual(6);
  });

  it('permite multiples delimitadores personalizados', () => {
    expect(sumar("//[*][%] 1*2%3,7-9")).toEqual(22);
  });
});


