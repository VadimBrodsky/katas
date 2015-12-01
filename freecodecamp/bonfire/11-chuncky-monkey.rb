def chunk(array, size)
  num_of_groups = array.length / size
  grouped_array = []
  num_of_groups.times { grouped_array.push(array.shift(size)) }
  array.length == 0 ? grouped_array : grouped_array.push(array)
end

p chunk(['a','b','c','d'], 2)
p chunk([0, 1, 2, 3, 4, 5], 3)
p chunk([0, 1, 2, 3, 4, 5], 2)
p chunk([0, 1, 2, 3, 4, 5], 4)
