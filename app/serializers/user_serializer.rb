class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :image_url, :left_off
end
