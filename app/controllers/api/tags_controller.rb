class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
    if params[:tag_query] && !params[:tag_query].empty?
      @tags = @tags.where(
        [  "title LIKE :tag_search",
          {tag_search: "%#{params[:tag_query]}%"}
        ]
      )
    end
    # @playlists = @tags.playlists
    render "api/playlists/index"
  end

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
