class UserstorySerializer < ActiveModel::Serializer
  attributes :id, :left_off, :user_id, :story_id, :story_name

  def story_name
    object.story.name
  end
end
