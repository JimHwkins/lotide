const assertEqual = require("./assertEqual");

const tail = (arr) => {
  return arr.slice(1);
};

module.exports = tail;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
