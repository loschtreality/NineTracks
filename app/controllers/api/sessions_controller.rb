class Api::SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show" #or some other path
    else
      render json: ["Invalid Credentials"], status: 442
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["Not logged in"], status: 404
    end
  end
end
