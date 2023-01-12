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

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const i of Object.keys(object1)) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (eqArrays(object1[i], object2[i])) {
          return true;
        }
        return false;
      } else {
        if (object1[i] === object2[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false
