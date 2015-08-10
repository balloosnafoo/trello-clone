json.extract! @board, :title, :id

json.lists do
  json.array! @board.lists do |list|
    json.extract! list, :id, :title, :board_id
    json.cards do
      json.array! list.cards do |card|
        json.extract! card, :id, :list_id, :title
      end
    end
  end
end
