class Location < ApplicationRecord
    has_many :book_locations
    has_many :books, through: :book_locations
end
