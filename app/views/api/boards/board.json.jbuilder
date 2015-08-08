json.extract! @board, :title, :id

json.lists do
  json.array! @board.lists do |list|
    json.extract! list, :id, :title, :board_id
  end
end
