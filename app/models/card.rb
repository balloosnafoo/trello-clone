class Card < ActiveRecord::Base
  validates :list, presence: true

  belongs_to :list

  has_many :todo_items
end
