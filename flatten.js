const flatten = (arr) => {
  let result = [];
  if (arr.length === 0 || arr === undefined) {
    return undefined;
  }
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = flatten;
