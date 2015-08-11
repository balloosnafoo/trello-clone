class Api::ListsController < ApplicationController
  def new
    @list = List.new
    render json: @list
  end

  def create
    @list = List.create(list_params)
    if @list.save
      render json: @list
    else
      render json: @list, status: :unprocessable_entity
    end
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: @list
  end

  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end
