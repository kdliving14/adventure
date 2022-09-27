class UserchoiceSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  # has_one :user, only: [:id]
  has_one :event
  has_one :choice
end
