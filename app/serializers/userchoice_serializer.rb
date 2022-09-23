class UserchoiceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :event
  has_one :choice
end
