def destroyer(array, *args)
  array.delete_if { |item| args.include? item }
end

p destroyer([1,2,3,1,2,3], 2, 3) #=> [1, 1]
p destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) #=> [1, 5, 1]
p destroyer([3, 5, 1, 2, 2], 2, 3, 5) #=> [1]
p destroyer([2, 3, 2, 3], 2, 3) #=> []
p destroyer(["tree", "hamburger", 53], "tree", 53) #=> ["hamburger"]
