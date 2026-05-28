function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseInput(input) {
  const headerMatch = input.match(/^\/\/((?:\[[^\]]+\])+)(?:\s*)(.*)$/);

  if (!headerMatch) {
    return {
      delimiters: [",", "-"],
      numberSection: input,
    };
  }

  const delimiterDefinitions = headerMatch[1];
  const numberSection = headerMatch[2];
  const delimiters = Array.from(delimiterDefinitions.matchAll(/\[([^\]]+)\]/g)).map(
    (match) => match[1]
  );

  return {
    delimiters: [",", "-", ...delimiters],
    numberSection,
  };
}

function sumar(a, b) {
  if (a === "") {
    return 0;
  }

  if (typeof a === "string" && b === undefined) {
    const { delimiters, numberSection } = parseInput(a);
    const splitRegex = new RegExp(delimiters.map(escapeRegex).join("|"));

    return numberSection
      .split(splitRegex)
      .filter((value) => value !== "")
      .map((value) => Number.parseInt(value, 10))
      .filter((value) => value <= 1000)
      .reduce((accumulator, value) => accumulator + value, 0);
  }

  return a + b;
}

export default sumar;
