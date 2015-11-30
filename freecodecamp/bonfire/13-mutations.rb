def mutation(array)
  array.last.downcase.split('').map { |letter| array.first.downcase.split('').include? letter }.uniq.length == 1 ? true : false
end

p mutation(['hello', 'hey'])
p mutation(['hello', 'Hello'])
p mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])
p mutation(['Mary', 'Army'])
p mutation(['Alien', 'line'])
p mutation(['floor', 'for'])
p mutation(['hello', 'neo'])
