class UserchoiceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :choice_id, :event, :choice
end
