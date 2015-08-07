class Api::BoardsController < ApplicationController
  def new
    @board = Board.new
    render json: @board
  end

  def create
    @board = Board.find(params[:id])
    if @board.save
      render json: @board
    else
      render json: @board, status: :unprocessable_entity
    end
  end

  def index
    render json: Board.all
  end

  def show
    render json: Board.find(params[:id])
  end

  def destroy
  end

  def edit
  end

  def update
  end

  private
  def board_params
    params.require[:board].permit[:title]
  end
end
