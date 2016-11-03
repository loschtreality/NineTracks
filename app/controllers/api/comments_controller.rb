class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render show
    else
      render(
        json: ["Invalid comment"],
        status: 401
      )
    end
  end

  def destroy
  comment = Comment.find(params[:id])
  comment.destroy
  render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
