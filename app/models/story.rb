class Story < ApplicationRecord
    has_many :events
    has_many :choices, through: :events
end
