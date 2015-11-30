require 'pry'

class GameBoard
  @board = Array.new(81)
end

class Square
  attr_accessor :value, :x, :y

  def initialize(number = nil, xPos, yPos)
    self.value = number
    self.x = xPos
    self.y = yPos
  end

  def value=(val)
    begin
      raise 'Invalid value' unless Square.value_in_range?(val)
    rescue RuntimeError => exception_value
      puts exception_value
    else
      @value = val
    end
  end

  def x=(pos)
    begin
      raise 'Invalid position' unless Square.position_in_range?(pos)
    rescue RuntimeError => exception_value
      puts exception_value
    else
      @x = pos
    end
  end

  def y=(pos)
    begin
      raise 'Invalid postion' unless Square.position_in_range?(pos)
    rescue RuntimeError => exception_value
      puts exception_value
    else
      @y = pos
    end
  end

  def self.position_in_range?(pos)
    (1..3).include? pos
  end

  def self.value_in_range?(val)
    ((1..9).include? val) || (val.nil?)
  end
end

class Section
  def initialize()
    # @squares = {  }
  end
end

binding.pry
