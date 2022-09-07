class Book < ApplicationRecord
  belongs_to :user

  has_many :book_authors
  has_many :book_genres
  has_many :book_locations
  has_many :book_tropes

  has_many :authors, through: :book_authors
  has_many :genres, through: :book_genres
  has_many :locations, through: :book_locations
  has_many :tropes, through: :book_tropes

end
