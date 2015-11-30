function palindrome(str) {
  function sanitize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function stringReverse(str) {
    return str.split('').reverse().join('');
  }

  if ((sanitize(str)) == (sanitize(stringReverse(str)))) {
    return true;
  } else {
    return false;
  }
}


strings = [
  'eye',
  'race car',
  'not a palindrome',
  'A man, a plan, a canal. Panama',
  'never odd or even',
  'nope',
  'almostomla',
  'My age is 0, 0 si ega ym.',
  '1 eye for of 1 eye.',
  '0_0 (: /-\ :) 0-0'
]

console.log(strings[3], palindrome(strings[3]));
