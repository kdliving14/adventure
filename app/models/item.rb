class Item < ApplicationRecord
  belongs_to :event
  has_many :inventories
end
