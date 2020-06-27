function longestString(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}
