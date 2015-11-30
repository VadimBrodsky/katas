def sanitize(input)
  input.downcase.gsub(/[^a-z0-9]/, '')
end

def palindrome(str)
  sanitize(str) == sanitize(str.reverse)
end


tests = {
  'eye' => true,
  'race car' => true,
  'not a palindrome' => false,
  'A man, a plan, a canal. Panama' => true,
  'never odd or even' => true,
  'nope' => false,
  'almostomla' => false,
  'My age is 0, 0 si ega ym.' => true,
  '1 eye for of 1 eye.' => false,
  '0_0 (: /-\ :) 0-0' => true
}

tests.each do |test, result|
  p "#{test}: #{palindrome(test)} - #{palindrome(test) == result}"
end
