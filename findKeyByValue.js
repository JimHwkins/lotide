const findKeyByValue = (object, value) => {
  console.log(Object.keys(object));
  for (let i of Object.keys(object)) {
    if (object[i] === value) {
      return i;
    }
  }
};

module.exports = findKeyByValue;
