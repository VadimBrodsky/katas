def where(array, num)
  array.push(num).sort.index(num)
end

p where([10, 20, 30, 40, 50], 35) # should return 3
p where([10, 20, 30, 40, 50], 30) # should return 2
p where([40, 60,], 50)            # should return 1
p where([3, 10, 5], 3)            # should return 0
p where([5, 3, 20, 3], 5)         # should return 2
p where([2, 20, 10], 19)          # should return 2
p where([2, 5, 10], 15)           # should return 3
