const assert = require('assert');

function binarySearch(sortedArray, value) {
  let lowerBound = 0;
  let upperBound = sortedArray.length - 1;
  let count = 0;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    const valueAtMidpoint = sortedArray[midpoint];
    count += 1;

    if (value < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (value > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    } else if (value === valueAtMidpoint) {
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
