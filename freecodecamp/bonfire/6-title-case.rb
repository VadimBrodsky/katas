def title_case(string)
  string.split(' ').map{ |word| word.capitalize }.join(' ')
end

p title_case("I'm a little tea pot")
