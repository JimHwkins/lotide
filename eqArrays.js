const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  let output = false;
  if (array1.toString() === array2.toString()) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
