function sumar(a, b) {
  if (a === "") {
    return 0;
  }

  if (typeof a === "string" && b === undefined) {
    return a
      .split(",")
      .map((value) => Number.parseInt(value, 10))
      .reduce((accumulator, value) => accumulator + value, 0);
  }

  return a + b;
}

export default sumar;
