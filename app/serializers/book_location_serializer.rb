class BookLocationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :book
  has_one :location
end
