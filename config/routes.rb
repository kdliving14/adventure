Rails.application.routes.draw do
  resources :userchoices, only: [:index, :show, :create, :destroy]
  resources :choices, only: [:index, :show]
  resources :inventories, only: [:index, :create]
  resources :items, only: [:index]
  resources :events, only: [:index, :show]
  resources :userstories, only: [:index, :show, :create, :destroy]
  resources :stories, only: [:index]
  resources :users, only: [:create, :destroy]
  
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"

  patch "/chosen", to: "userstories#choose"

  get "/me", to: "users#show"

end
