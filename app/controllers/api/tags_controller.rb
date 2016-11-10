class Api::TagsController < ApplicationController

  def index
    # debugger
    if params[:tag_query] && !params[:tag_query].empty?
      @tags = Tag.all.where(
        [  "title LIKE lower(:tag_search)",
          {tag_search: "%#{params[:tag_query].downcase}%"}
        ]
      )
    end
    @playlists = @tags.playlists
    if @playlists.empty?
      render []
    else
    render "api/playlists/index"
    end
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
