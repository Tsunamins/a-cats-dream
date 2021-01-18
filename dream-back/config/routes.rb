Rails.application.routes.draw do
  


 
  resources :games
  resources :users

  resources :users do
    resources :games
  end

 

  
end
