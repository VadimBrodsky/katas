function chunk(arr, size) {
  var groupedArray = [];
  var loops = arr.length / size;
  for (var i = 0; i < loops; i++) {
    var group = [];
    for (var j = 0; j < size; j++) {
      if (arr.length > 0 ) {
        group.push(arr.shift());
      }
    }
    groupedArray.push(group);
  }
  return groupedArray;
}

console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 3));
console.log(chunk([0, 1, 2, 3, 4, 5], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 4));
