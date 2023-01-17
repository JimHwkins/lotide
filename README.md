# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@jimhwkins/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: check if two arrays are equal
- `assertEqual(actual, expected)`: check if two primitive elements are equal or not
- `assertObjectsEqual(actual, expected)`: Returns true if both objects have identical keys with identical values. Otherwise you get back false!
- `countLetters(string)`: Takes in a string and returns a count of each letter in the sentence(string)
- `countOnly(allItems, itemsToCount)`: Takes in a collection of items and return counts for a second parameter of those items
- `eqArrays(array1, array2)`: Returns true if two arrays compared are equal
- `eqObjects(object1, object2)`: Returns true if two objects compared are equal
- `findKey(object, callback)`: Takes object being calledback and returns first key
- `findKeyByValue(object, value)`: Returns a key on an object where its value matches a given value.
- `flatten(arr)`: It flattens arrays inside array into a single-level array.
- `head(arr)`: Returns first element in an array
- `letterPositions(string)`: Takes an argument and returns object showing position of each letter
- `map(array, callback)`: Returns a new array based on the results of the callback function
- `middle(array)`: Takes in an array and return the middle element(s) of the given array
