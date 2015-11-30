def slasher(array, how_many)
  array.drop(how_many)
end

p slasher([1,2,3], 2)
p slasher([1,2,3], 0)
p slasher([1,2,3], 9)
p slasher([1,2,3], 4)
