class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    @card.save
    render json: @card
  end

  def update
  end

  def destroy
  end

  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end
end
