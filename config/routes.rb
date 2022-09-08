Rails.application.routes.draw do
  
  resources :users
  resources :books
  resources :book_locations
  resources :locations
  resources :book_tropes
  resources :tropes
  resources :book_genres
  resources :genres
  resources :book_authors
  resources :authors

  post "/login", to:"sessions#create"
  get "/userLoggedIn", to:"sessions#get_current_user"
  delete "/logout", to:"sessions#destroy"


  get '/thisUsersBooks', to:"books#my_books"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
