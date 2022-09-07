class User < ApplicationRecord
    has_many :books
    has_many :book_authors, through: :books
    has_many :authors, through: :book_authors
    has_many :book_genres, through: :books
    has_many :book_tropes, through: :books
    has_many :book_locations, through: :books


    has_secure_password
end
