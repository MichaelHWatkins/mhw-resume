Rails.application.routes.draw do
  root 'homes#index'

  get "/education", to: 'homes#index'
  get "/work", to: 'homes#index'
  get "/projects", to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
