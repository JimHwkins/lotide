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

module.exports = middle;
