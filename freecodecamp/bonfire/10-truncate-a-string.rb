def truncate(str, num)
  # p str.length
  if num < str.length
    num = num > 4 ? num - 3 : num
    str.slice(0, num) + '...'
  else
    str
  end
end

p truncate('A-tisket a-tasket A green and yellow basket', 11)
p truncate('Peter Piper picked a peck of pickled peppers', 14)
p truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)
p truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2)
p truncate('A-', 1)
p truncate("Absolutely Longer", 2)
