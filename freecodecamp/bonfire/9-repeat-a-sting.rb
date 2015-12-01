def repeat(str, num)
  num < 0 ? '' : str * num
end

p repeat('abc', 3)
p repeat('*', 3)
p repeat('abc', 4)
p repeat('abc', 1)
p repeat('*', 8)
p repeat('abc', -2)
