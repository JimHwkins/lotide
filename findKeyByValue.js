const findKeyByValue = (object, value) => {
  console.log(Object.keys(object));
  for (let i of Object.keys(object)) {
    if (object[i] === value) {
      return i;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
