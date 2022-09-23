class Choice < ApplicationRecord
  belongs_to :event
  has_many :userchoices
end
