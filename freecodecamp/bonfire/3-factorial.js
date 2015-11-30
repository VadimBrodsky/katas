// naive
function factorialize(num) {
  var sum = 1;
  for (var i = 1; i <= num; i++) {
    sum = sum * i; 
  }
  return sum;
}

// range style
function factorialize2(num) {
  function oneToNum(max) {
    if (max < 1) {
      return [1];
    }
    var array = [];
    for (var i = 1; i <= max; i++) {
      array.push(i);
    }
    return array;
  }
  
  return oneToNum(num).reduce(function(prev, next){
    return prev * next;
  });
}

//recursion
function factorialize3(n, accumulator) {
  if (accumulator === undefined) {
    accumulator = 1;
  }
  if (n === 0) {
    return accumulator;
  }
  return factorialize3(n - 1, n * accumulator);
}

console.log('\nApproach 1:');
console.log(factorialize(5),  factorialize(5) == 120);
console.log(factorialize(10), factorialize(10) == 3628800);
console.log(factorialize(20), factorialize(20) == 2432902008176640000);
console.log(factorialize(0),  factorialize(0) == 1);

console.log('\nApproach 2:');
console.log(factorialize2(5),  factorialize2(5) == 120);
console.log(factorialize2(10), factorialize2(10) == 3628800);
console.log(factorialize2(20), factorialize2(20) == 2432902008176640000);
console.log(factorialize2(0),  factorialize2(0) == 1);

console.log('\nApproach 3:');
console.log(factorialize3(5),  factorialize3(5) == 120);
console.log(factorialize3(10), factorialize3(10) == 3628800);
console.log(factorialize3(20), factorialize3(20) == 2432902008176640000);
console.log(factorialize3(0),  factorialize3(0) == 1);
