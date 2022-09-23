Rails.application.routes.draw do
  resources :userchoices
  resources :choices
  resources :inventories
  resources :items
  resources :events
  resources :userstories
  resources :stories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
