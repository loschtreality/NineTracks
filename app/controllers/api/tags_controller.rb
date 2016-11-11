class Api::TagsController < ApplicationController

  def index
    if params[:tag_query] && !params[:tag_query].empty?
      @tags = Tag.all.where(
        [  "lower(title) LIKE :tag_search",
          {tag_search: "%#{params[:tag_query].downcase}%"}
        ]
      )
    end

    unless @tags.empty?
      @playlists = @tags.map { |tag|
        tag.playlists
      }.flatten.uniq
    else
      @playlists = []
    end

    if @playlists.empty?
      render "api/playlists/index"
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
