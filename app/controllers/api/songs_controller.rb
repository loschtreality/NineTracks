class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    if (value = params[:query])
      @songs = @songs.where("title LIKE ? OR artist LIKE ?", "%#{value}%", "%#{value}%")
    end
  end

  def show
    @song = Song.find(params[:id])
  end


  def create
    @song = Song.create(song_params)
    if @song.save
      render show
    else
      render json: ["Invalid song"], status: 401
    end
  end

  private

  def song_params
    params.permit(:song).require(:url)
  end
end
