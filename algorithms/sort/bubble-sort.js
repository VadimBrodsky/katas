const assert = require('assert');

function bubbleSort(list) {
  let unsortUntilIndex = list.length - 1;
  let sorted = false;
  let count = 0;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i <= unsortUntilIndex; i += 1) {
      if (list[i] > list[i + 1]) {
        sorted = false;
        count += 1;

        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }

    unsortUntilIndex -= 1;
  }

  console.log(`sorted in ${count} steps`);
  return count;
}

assert.strictEqual(bubbleSort([5, 4, 3, 2, 1]), 10);

let list = [65, 55, 45, 35, 25, 15, 10];
bubbleSort(list);
assert.deepStrictEqual(list, [10, 15, 25, 35, 45, 55, 65]);
