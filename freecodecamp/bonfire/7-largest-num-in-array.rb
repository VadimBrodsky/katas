def largest_of_four(arr)
  arr.collect{ |array| array.max }
end

p largest_of_four([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
