class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end


  def create
    @song = Song.create(song_params)
    if @song.save
      #would I be saving to cloudinary here??
    end
  end

  private

  def song_params
    params.permit(:song).require(:picture_url, :url)
  end
end
