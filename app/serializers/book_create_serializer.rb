class BookCreateSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :user_id
  # attributes :id, :title, :price, :comment, :user_id, :book_genres, :book_tropes, :book_locations, :author_name


  has_many :authors
  def author_first_name
    object.author.first_name
  end
  
  def author_last_name
    object.author.last_name
  end
  
  has_many :genres
  def book_genres
    object.genre.name
  end
  
  has_many :locations
  def book_locations
    object.location.name
  end

  # has_many :authors
  # def author_name
  #   object.authors
  # end
  
  # has_many :genres
  # def book_genres
  #   object.genres
  # end

  # has_many :tropes
  # def book_trope
  #   object.tropes
  # end
  
  # has_many :locations
  # def book_locations
  #   object.locations
  # end


end
