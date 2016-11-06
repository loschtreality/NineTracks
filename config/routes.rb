Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :playlists
    resources :comments, only: [:create, :destroy]
    resources :tags, only: [:index, :create]
    resources :taggings, only: [:index, :create]
    resources :songs, only: [:index, :show, :create]

    resource :session, only: [:create, :destroy ]
  end
end
