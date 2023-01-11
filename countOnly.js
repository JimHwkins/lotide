// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  let results = {};
  for (let i of allItems) {
    if (itemsToCount[i]) {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }
    }
  }
  return results;
};
