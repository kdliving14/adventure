class Userstory < ApplicationRecord
  belongs_to :user
  belongs_to :story
  has_many :inventories
end
