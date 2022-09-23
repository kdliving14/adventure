class StorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :trigger_warnings
end
