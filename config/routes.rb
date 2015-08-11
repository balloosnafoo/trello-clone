Rails.application.routes.draw do
  resources :users
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#home"

  namespace :api, defaults: { format: :json } do
    resources :boards
    resources :lists
    resources :cards
  end
end
