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

    if @playlist.save
      tag = Tag.create(@playlist.title)

        # Create a new tag with the name of the playlist and add to tags
        # Search and add if tag is already created
        if tag.save
          @playlist.tags.push(tag)
        else
          res = Tag.find_by(title: @playlist.title)
          @playlist.tags.push(res)
        end

        # Add photo to cloud if passed in

        unless @playlist.picture_url.nil?
          #upload to cloudinary
        end

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
