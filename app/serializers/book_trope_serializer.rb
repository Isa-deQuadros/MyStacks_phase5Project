class BookTropeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :book
  has_one :trope
end
