class EventSerializer < ActiveModel::Serializer
  attributes :id, 
              :story_info,
              :name, 
              :short_description, 
              :long_description, 
              :image_url, 
              :sound_effect, 
              :delay, 
              :choices
              
  def story_info
    object.story.name
  end
end
