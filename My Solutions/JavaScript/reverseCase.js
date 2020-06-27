function reverseCase(str) {
  return str
    .split("")
    .map(char => {
      return char.toLowerCase() === char
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join("");
}
