const without = function (list, filter) {
  let output = [];
  for (let i = 0; i < list.length; i++) {
    if (!filter.includes(list[i])) {
      output.push(list[i]);
    }
  }
  return output;
};

module.exports = without;
