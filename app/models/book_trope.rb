class BookTrope < ApplicationRecord
  belongs_to :book
  belongs_to :trope

  # accepts_nested_attributes_for :trope
end
