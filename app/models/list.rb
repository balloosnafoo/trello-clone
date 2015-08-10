class List < ActiveRecord::Base
  validates :board, presence: true

  belongs_to(
    :board,
    class_name: "Board",
    foreign_key: :board_id,
    primary_key: :id
  )

  has_many :cards
  has_many :todo_items, through: :cards, source: :todo_items
end
