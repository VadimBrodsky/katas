const assert = require('assert');

function binarySearch(array, value) {
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let count = 0;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    count += 1;

    if (value < array[midpoint]) {
      upperBound = midpoint - 1;
    } else if (value > array[midpoint]) {
      lowerBound = midpoint + 1;
    } else if (value === array[midpoint]) {
      console.log(`found in ${count} steps`);
      return midpoint;
    }
  }

  console.log(`not found in ${count} steps`);
  return null;
}

assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 5), 4);
assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 2), 1);
assert.strictEqual(binarySearch([1, 2, 3, 4, 5, 6], 10), null);
