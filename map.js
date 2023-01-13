const eqArrays = (array1, array2) => {
  let output = false;
  if (array1.toString() === array2.toString()) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let i of array) {
    results.push(callback(i));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.length);
const results3 = map(
  words,
  (word) => word[0] + word[1] + word[word.length - 1]
);
console.log(results2);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["grd", "col", "too", "mar", "tom"]);
