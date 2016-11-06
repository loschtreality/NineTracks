class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all.includes(:tags).includes(:songs)
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    @playlist.username = current_user.username

    if @playlist.save
      tag = Tag.new(title: @playlist.title.downcase)

        if tag.save
          Tagging.create(playlist_id: @playlist.id, tag_id: tag.id)
        else
          tag = Tag.find_by(title: @playlist.title)
          Tagging.create(playlist_id: @playlist.id, tag_id: tag.id)
        end

      render "api/playlists/show"
    else
      render json: ["Invalid playlist"], status: 401
    end
  end

  def edit
    @playlist = Playlist.find(params[:id])
  end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update_attributes(playlist_params)
      render show
    else
      render json: ["An error occurred while editing the playlist"], status: 401
    end
  end

  def destroy
    playlist = Playlist.find(params[:id])
    playlist.destroy
    render json: {}
  end


  private

  def playlist_params
    params.require(:playlist).permit(:title, :description, :picture_url, tag_ids: [])
  end
end
