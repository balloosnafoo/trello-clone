class BoardsController < ApplicationController
  def new
    @board = Board.new
    render :json @board
  end

  def create
    @board = Board.new(board_params)
    render :json @board
  end

  def edit
  end

  def update
  end

  def index
  end

  def destroy
  end

  def show
  end
end
