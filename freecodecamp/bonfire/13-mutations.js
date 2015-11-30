function mutation(arr) {
  function dedupe(arr) {
    return arr.filter(function(item, position) {
      return arr.indexOf(item) == position;
    });
  }

  var dedupedTarget = dedupe(arr[0].split('')).join('');
  var dedupedPattern = dedupe(arr[1].toLowerCase().split('')).join('');
  var re = new RegExp('[' + dedupedPattern + ']', 'gi');

  return dedupedTarget.match(re).length == dedupedPattern.length ? true : false;
}

console.log( mutation(['hello', 'hey']));
console.log( mutation(['hello', 'Hello']));
console.log( mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log( mutation(['Mary', 'Army']));
console.log( mutation(['Alien', 'line']));
console.log( mutation(['floor', 'for']));
console.log( mutation(['hello', 'neo']));

