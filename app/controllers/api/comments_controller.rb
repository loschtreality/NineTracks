class Api::CommentsController < ApplicationController
  def new

  end

  def create

  end


  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :user_name)
  end
end
