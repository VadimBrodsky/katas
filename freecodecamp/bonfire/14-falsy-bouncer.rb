def bouncer(array)
  array.delete_if { |item| [false, nil].include? item }
end

p bouncer([7, 'ate', '', false, 9])
p bouncer(['a', 'b', 'c'])
p bouncer([false, nil, 0, ''])
