class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :user_name


  has_many :books

  
end
