function findLongestWord(str) {
  return str.toLowerCase().split(' ').sort(function(a, b) {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return 0;
    }
  })[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
