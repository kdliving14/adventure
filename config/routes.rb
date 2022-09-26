Rails.application.routes.draw do
  resources :userchoices
  resources :choices
  resources :inventories
  resources :items
  resources :events
  resources :userstories
  resources :stories
  resources :users, except: [:show]
  
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

end
