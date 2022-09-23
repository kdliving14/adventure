class InventorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :userstory
  has_one :item
end
