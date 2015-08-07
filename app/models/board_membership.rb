class BoardMembership < ActiveRecord::Base
  validates :member, :board, presence: true

  belongs_to :member, class_name: "User", foreign_key: :user_id, primary_key: :id
  belongs_to :board
end
