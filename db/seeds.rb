# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FactoryGirl.define do

  sequence :username do |un|
    "#{un}"
  end

  factory :user do
    username
    password "password"
  end

# Sequence makes sure that the values are unique. This avoids hitting the not null/unqiue constraint on the db
  factory :playlist do
    sequence(:title) { |t| "#{t}"}
    description ""
    picture_url "http://res.cloudinary.com/loren-losch/video/upload/v1478376153/ctxdvbf1wzvbnhuojnr1.mp3"
    user_id 0
    username ""
  end

  factory :tag do
    sequence(:title) { |tag_name| "#{tag_name}" }
  end


end


# x.times do create playlists
# x.times do create users
# x.times do create tags
# (x * 3).times do create taggings at random with a playlist id and tag id

# (num_songs.each id * 5) do create mixes with plalist id and song id

# Faker::Superhero.name <-- Playlist title
# Faker::Avatar.image("#{Faker::Name.first_name}") <--- Playlist Pics
# Faker::StarWars.character <--- User names
# Faker::Hipster.paragraph(3, false, 3) <--- Playlist Descriptions
# Faker::Hipster.word <--- Tags
# Faker::Number.between(1, 10) <--- Songs, Taggings

User.create({
  username: "Demo",
  password: "password"
  })

User.create({
  username: "Loren",
  password: "password"
  })

# Playlist.create({
#   title: "Untitled Playlist",
#   description: "",
#   picture_url: "http://res.cloudinary.com/loren-losch/video/upload/v1478376153/ctxdvbf1wzvbnhuojnr1.mp3",
#   user_id: 2,
#   username: ""
#   })


(1..53).each do |n|
  # Playlist
  playlist_title = Faker::Superhero.name
  img = Faker::Avatar.image("#{playlist_title}")
  desc = Faker::Hipster.paragraph(3, false, 3)

  #user
  user_name = "#{Faker::StarWars.character} #{Faker::Name.last_name}"

  3.times do
    begin
      FactoryGirl.create(:tag, title: "#{Faker::Hipster.word} #{Faker::Hipster.word}")
    rescue
      retry
    end


  end

  FactoryGirl.create(:user, username: user_name)
  FactoryGirl.create(:playlist, title: playlist_title, description: desc, picture_url: img, user_id: n, username: user_name)

end

Song.create({
  title: "cigaretts in the theater",
  artist: "two door cinema club",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478376153/ctxdvbf1wzvbnhuojnr1.mp3",
  user_id: 2
  })

Song.create({
  title: "side walks",
  artist: "story of the year",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478652956/SideWalks_Story_of_the_Year_ymhm1m.mp3",
  user_id: 2
  })

Song.create({
  title: "cancer",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478728360/twenty_one_pilots-_Cancer_Cover_LYRIC_VIDEO_brf92l.mp3",
  user_id: 2
  })

Song.create({
  title: "car radio",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478728353/Car_Radio_-_Twenty_One_Pilots_LYRICS_fgb7hs.mp3",
  user_id: 2
  })


# Connect playlists with tags and songs
Playlist.all.each do |pl|
  (rand(3) + 1).times { Tagging.create(playlist_id: pl.id, tag_id: Tag.find_by_id(rand(152) + 1).id)}
  2.times { Mix.create(playlist_id: pl.id, song_id: Song.find_by_id(rand(3) + 1).id)}

end
