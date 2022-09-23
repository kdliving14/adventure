class ChoiceSerializer < ActiveModel::Serializer
  attributes :id, :content, :image_url, :item_needed, :next_event_id
  has_one :event
end
