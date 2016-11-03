class Api::PlaylistsController < ApplicationController

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end


  private

  def playlist_params
    params.require(:playlist).permit(:title, :description, :picture_url, :user_id, tag_ids: [])
  end

end
