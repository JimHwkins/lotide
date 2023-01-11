//eqArrays function
const eqArrays = (array1, array2) => {
  let output = false;
  if (array1.toString() === array2.toString()) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

// assertArraysEqual function
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//without function
const without = function (list, filter) {
  let output = [];
  for (let i = 0; i < list.length; i++) {
    if (!filter.includes(list[i])) {
      output.push(list[i]);
    }
  }
  return output;
};
//test
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
