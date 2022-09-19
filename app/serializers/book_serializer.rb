class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :comment, :user_id, :book_genres, :book_tropes, :book_locations, :author_name

  has_many :authors
  def author_name
    object.authors
  end
  
  has_many :genres
  def book_genres
    object.genres
  end

  has_many :tropes
  def book_trope
    object.tropes
  end
  
  has_many :locations
  def book_locations
    object.locations
  end

end
