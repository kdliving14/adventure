class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :image_url
end
