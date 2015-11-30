def factorialize(num)
  num == 0 ? 1 : (1..(num.abs)).inject(:*)
end

p factorialize(5)
p factorialize(10)
p factorialize(20)
p factorialize(0)
p factorialize(-20)

p factorialize(5) == 120
p factorialize(10) == 3628800
p factorialize(20) == 2432902008176640000
p factorialize(0) == 1