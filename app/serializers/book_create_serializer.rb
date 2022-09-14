class BookCreateSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :user_id

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



end
