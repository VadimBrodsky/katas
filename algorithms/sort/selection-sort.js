const assert = require('assert');

function selectionSort(array) {
  let operations = 0;

  array.forEach((value, index) => {
    let lowestNumberIndex = index;

    for (let j = index + 1; j < array.length; j++) {
      operations += 1;

      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != index) {
      operations += 1;

      array[index] = array[lowestNumberIndex];
      array[lowestNumberIndex] = value;
    }
  });

  console.log(`sorted in ${operations} steps`);
  return operations;
}

assert.strictEqual(selectionSort([5, 4, 3, 2, 1]), 12);

let list = [65, 55, 45, 35, 25, 15, 10];
selectionSort(list);
assert.deepStrictEqual(list, [10, 15, 25, 35, 45, 55, 65]);
