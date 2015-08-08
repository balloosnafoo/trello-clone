class Api::ListsController < ApplicationController
  def new
  end

  def create
    @list = current_user.links.create(list_params)
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
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end
end
