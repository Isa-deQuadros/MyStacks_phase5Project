class BookGenreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :book
  has_one :genre
end
