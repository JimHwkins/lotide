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

assertArraysEqual(letterPositions("hello").o, [4]);
