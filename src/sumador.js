function sumar(a, b) {
  if (a === "") {
    return 0;
  }

  if (typeof a === "string" && b === undefined) {
    return Number.parseInt(a, 10);
  }

  return a + b;
}

export default sumar;
