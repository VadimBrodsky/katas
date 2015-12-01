function end(str, target) {
  return str.search(new RegExp(target + '$', 'g')) >= 0 ? true : false;
}

console.log(end("Bastian", "n"));
console.log(end("Connor", "n"));
console.log(end("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(end("He has to give me a new name", "name"));
