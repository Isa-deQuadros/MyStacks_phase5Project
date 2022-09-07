class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :comment
  has_one :user
end
