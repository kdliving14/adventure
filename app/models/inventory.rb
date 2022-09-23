class Inventory < ApplicationRecord
  belongs_to :userstory
  belongs_to :item
end
