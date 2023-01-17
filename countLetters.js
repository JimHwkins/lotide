const countLetters = (string) => {
  let result = {};
  for (let i of string) {
    if (i !== " ") {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
    }
  }
  console.log(result);
};

module.exports = countLetters;
