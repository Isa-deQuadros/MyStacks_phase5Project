class Book < ApplicationRecord
  belongs_to :user

  has_many :book_authors, dependent: :destroy
  has_many :book_genres, dependent: :destroy
  has_many :book_locations, dependent: :destroy
  has_many :book_tropes, dependent: :destroy

  has_many :authors, through: :book_authors 
  has_many :genres, through: :book_genres
  has_many :locations, through: :book_locations
  has_many :tropes, through: :book_tropes

end
