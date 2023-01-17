const letterPositions = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (letter !== " ") {
      if (!Array.isArray(result[letter])) {
        result[letter] = [i];
      } else {
        result[letter].push(i);
      }
    }
  }
  return result;
};

module.exports = letterPositions;
