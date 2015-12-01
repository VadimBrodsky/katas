function truncate(str, num) {
  if (str.length > num) {
    var newNum = num > 4 ? num - 3 : num;
    return str.slice(0, newNum) + '...';
  } else {
    return str;
  }
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncate('Peter Piper picked a peck of pickled peppers', 14));
console.log(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length));
console.log(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2));
console.log(truncate('A-', 1));
console.log(truncate("Absolutely Longer", 2));
