const takeUntil = (array, callback) => {
  for (let i of array) {
    if (callback(i)) {
      return array.slice(0, array.indexOf(i));
    }
  }
};

module.exports = takeUntil;
