class Event < ApplicationRecord
  belongs_to :story
  has_many :choices
  has_many :items
end
