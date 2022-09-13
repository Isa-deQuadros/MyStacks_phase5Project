class BookLocation < ApplicationRecord
  belongs_to :book
  belongs_to :location

  # accepts_nested_attributes_for :location
  
end
