const map = (array, callback) => {
  const results = [];
  for (let i of array) {
    results.push(callback(i));
  }
  return results;
};

module.exports = map;
