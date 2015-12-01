function repeat(str, num) {
  var newStr = '';
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

console.log(repeat('abc', 3));
console.log(repeat('*', 3));
console.log(repeat('abc', 4));
console.log(repeat('abc', 1));
console.log(repeat('8', 8));
console.log(repeat('abc', -2));
