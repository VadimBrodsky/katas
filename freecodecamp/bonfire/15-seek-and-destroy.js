function destroyer(arr) {
  var destArgs = arguments;
  return arr.filter(function(el) {
    var match = false;
    for (var i = 1; i < destArgs.length; i++) {
      if (el == destArgs[i]) {
        match = true;
      }
    }
    return !match;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); // [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"].
