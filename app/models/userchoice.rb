class Userchoice < ApplicationRecord
  belongs_to :userstory
  belongs_to :event
  belongs_to :choice
end
