json.extract! playlist, :id, :title, :description, :picture_url
  json.songs do |song|
    json.partial! "api/songs/song", collection: playlist.songs, as: :song
  end

  json.tags do |tag|
    json.partial! "api/tags/tag", collection: playlist.tags, as: :tag
  end
