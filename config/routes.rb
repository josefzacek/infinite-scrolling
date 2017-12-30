Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts, only: [:index, :show]

  get '/infinite-scrolling', to: 'posts#infinite_scrolling'

  get '/load-more-button', to: 'posts#load_more_button'

  get '/paginate', to: 'posts#paginate'

  root 'posts#index'
end
