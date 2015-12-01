function bouncer(arr) {
  return arr.filter(function(el) {
    if (Boolean(el)) {
      return el;
    }
  });
}

console.log(bouncer([7, 'ate', '', false, 9]));
console.log(bouncer(['a', 'b', 'c']));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
