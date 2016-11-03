class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render show
    else
      render(
        json: ["Invalid tag"],
        status: 401
      )
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:title, :query)
  end

end
