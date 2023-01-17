const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
