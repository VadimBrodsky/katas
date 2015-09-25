#
# Linked Lists - Length & Count
# 
# Implement Length() to count the number of nodes in a linked list.
# 
# length(null) === 0
# length(1 -> 2 -> 3 -> null) === 3
# 
# Implement Count() to count the occurrences of an integer in a linked list.
# 
# count(null, 1) === 0
# count(1 -> 2 -> 3 -> null, 1) === 1
# count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4
# 
# I've decided to bundle these two functions within the same Kata since they are both very similar.
# 
# The push() and buildOneTwoThree() functions do not need to be redefined.
# #

# require 'pry'

class Node
	attr_accessor :data, :next
  def initialize(data)
  	@data = data
    @next = nil
  end
  
  def to_a(node = self)
    values = [node.data]
    values = !node.next.nil? ? values << to_a(node.next) : values
  end
end

def length(node)
	node.nil? ? 0 : node.to_a.flatten.uniq.length
end

def count(node, data)
	node.nil? ? 0 : node.to_a.flatten.select{ |i| i == data }.count
end


require 'minitest/autorun'

class TestKata < MiniTest::Unit::TestCase
  def test_output
    assert_equal length(nil), 0
    assert_equal length(Node.new(99)), 1
    assert_equal count(nil, 1), 0
  end
end
