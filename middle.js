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

const middle = (array) => {
  let middleIndex = array[Math.floor(array.length / 2)];
  if (array.length >= 3) {
    if (array.length % 2 === 0) {
      middleIndex = Math.floor((array.length - 1) / 2);
      return [array[middleIndex], array[middleIndex + 1]];
    } else {
      return middleIndex;
    }
  } else {
    return [];
  }
};
