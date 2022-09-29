class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :short_description, :long_description, :image_url, :sound_effect, :delay, :choices
  has_one :story
end
