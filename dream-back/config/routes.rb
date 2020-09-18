Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'private/hello'
  get 'public/hello'
  resources :chirps

 
  resources :games
  resources :users

  # resources :users do
  #   resources :games
  # end

 

  
end
