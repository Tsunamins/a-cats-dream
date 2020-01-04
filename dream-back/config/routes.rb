Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :games
  resources :stats

  resources :users do
    resources :games
  end

  resources :users do 
    resources :stats
  end
 

  
end
