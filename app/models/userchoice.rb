class Userchoice < ApplicationRecord
  belongs_to :user
  belongs_to :event
  belongs_to :choice
end
