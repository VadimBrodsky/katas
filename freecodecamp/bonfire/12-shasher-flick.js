function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

console.log(slasher([1,2,3], 2));
console.log(slasher([1,2,3], 0));
console.log(slasher([1,2,3], 9));
console.log(slasher([1,2,3], 4));
