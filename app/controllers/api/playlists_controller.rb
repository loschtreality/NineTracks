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

      #Create a new tag with the name of the playlist
      tag = Tag.new(title: @playlist.title.downcase)
        if tag.save
          Tagging.create(playlist_id: @playlist.id, tag_id: tag.id)
        else
          tag = Tag.find_by(title: @playlist.title.downcase)
          Tagging.create(playlist_id: @playlist.id, tag_id: tag.id)
        end

      #Parse the tags and return array of tag ids
      #set the tag ids in the join table between playlist and tags
      @playlist.tag_ids = find_create_tags(params[:playlist][:tags])

      #Parse the songs and return array of song ids
      #se thesong ids in the join table between playlist and songs
      @playlist.song_ids = map_songs(params[:playlist][:songs])

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

      # account for tags and songs here
      @playlist.tag_ids = find_create_tags(params[:playlist][:tags])
      @playlist.song_ids = map_songs(params[:playlist][:songs])


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
    params.require(:playlist).permit(:title, :description, :picture_url)
  end

  def find_create_tags(tags)
    tags.split(',').map do |tag|

      tag = tag.strip
      search_result = Tag.find_by_title(tag)
      if search_result
        search_result.id
      else
        newTag = Tag.create(title: tag)
        newTag.id
      end
    end
  end


  def map_songs(songs)
    songs.values.map do |song|
      song["id"].to_i
    end
  end

end
