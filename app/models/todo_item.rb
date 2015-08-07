class TodoItem < ActiveRecord::Base
  validates :card, presence: true

  belongs_to :card
end
