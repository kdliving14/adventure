Rails.application.routes.draw do
  resources :userchoices
  resources :choices
  resources :inventories
  resources :items
  resources :events
  resources :userstories
  resources :stories
  resources :users, except: [:index]
  
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"

  patch "/update", to: "users#update"
  patch "/chosen", to: "users#choose"

  get "/me", to: "users#show"

end
