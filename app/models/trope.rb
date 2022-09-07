class Trope < ApplicationRecord
    has_many :book_tropes
    has_many :books, through: :book_tropes
end
