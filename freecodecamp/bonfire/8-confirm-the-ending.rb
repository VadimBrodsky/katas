def end?(string, target)
  string[-target.length, target.length] == target
end

p end?('Bastian', 'n')
p end?('Connor', 'n')
p end?('Walking on water and developing software from a specification are easy if both are frozen', 'specification')
p end?('He has to give me a new name', 'name')
