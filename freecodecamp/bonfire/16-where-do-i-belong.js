function where(arr, num) {
  arr.push(num);
  return arr.sort(function(a,b) {
    return a - b;
  }).indexOf(num);
}

console.log(where([10, 20, 30, 40, 50], 35)); // should return 3
console.log(where([10, 20, 30, 40, 50], 30)); // should return 2
console.log(where([40, 60,], 50));            // should return 1
console.log(where([3, 10, 5], 3));            // should return 0
console.log(where([5, 3, 20, 3], 5));         // should return 2
console.log(where([2, 20, 10], 19));          // should return 2
console.log(where([2, 5, 10], 15));           // should return 3
