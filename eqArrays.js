const assertEqual = require("./assertEqual");

const eqArrays = (array1, array2) => {
  let output = false;
  if (array1.toString() === array2.toString()) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

module.exports = eqArrays;
