class List < ActiveRecord::Base
  validates :board, presence: true

  belongs_to :board

  has_many :cards
  has_many :todo_items, through: :cards, source: :todo_items
end
