class UserchoiceSerializer < ActiveModel::Serializer
  attributes :id, :userstory_id, :event_id, :choice_id, :event, :choice
end
