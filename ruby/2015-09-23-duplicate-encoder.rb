#
# Duplicate Encoder
#
# The goal of this exercise is to convert a string to a new string where each
# character in the new string is '(' if that character appears only once in the
# original string, or ')' if that character appears more than once in the
# original string. Ignore capitalization when determining if a character is a
# duplicate.
#
# Examples:
#
# "din" => "((("
#
# "recede" => "()()()"
#
# "Success" => ")())())"
#
# "(( @" => "))(("
#

def duplicate_encode(word)
 word.downcase.each_char.map {|c| word.count(c) < 2 ? '(' : ')'}.join
end

puts duplicate_encode('din')
puts duplicate_encode('recede')
puts duplicate_encode('Success')
puts duplicate_encode('((@')


require 'minitest/autorun'

class TestKata < MiniTest::Unit::TestCase
  def test_output
    assert_equal duplicate_encode('din'), '((('
    assert_equal duplicate_encode('recede'), '()()()'
    assert_equal duplicate_encode('Success'), ')())())'
    assert_equal duplicate_encode('(( @'), '))(('
  end
end
