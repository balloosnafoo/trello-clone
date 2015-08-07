class Board < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user

  has_many :board_memberships
  has_many :members, through: :board_memberships, source: :member
  has_many :lists
  has_many :cards, through: :lists, source: :cards
  has_many :todo_item, through: :cards, source: :todo_items
end
