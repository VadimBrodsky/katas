function titleCase(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().substring(1, word.length);
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));
