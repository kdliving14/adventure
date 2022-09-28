class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :image_url, :left_off
end
