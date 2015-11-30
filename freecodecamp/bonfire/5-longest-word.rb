def find_longest_word(string)
  string.downcase.split(' ').sort{ |x,y| y.length <=> x.length }.first.length
end

p find_longest_word("The quick brown fox jumped over the lazy dog")
