class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: @user
    else
      render json: ["Invalid Credentials"], status: 442
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
