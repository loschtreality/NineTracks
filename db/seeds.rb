# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FactoryGirl.define do
  sequence :title do |t|
    "#{t}"
  end

  sequence :username do |un|
    "#{un}"
  end

  sequence :tag do |tag|
    "#{tag}"
  end

  factory :user, class: User do
    username
    password: "password"
  end

# Sequence makes sure that the values are unique. This avoids hitting the not null/unqiue constraint on the db
  factory :playlist, class: Playlist do
    title
    description: ""
    picture_url: "http://res.cloudinary.com/loren-losch/video/upload/v1478376153/ctxdvbf1wzvbnhuojnr1.mp3"
    user_id: 0
    username: ""
  end

  factory :tag, class: Tag do
    title
  end


end


(3..53).each do |n|
  # Playlist
  playlist_title = Faker::Superhero.name
  img = Faker::Avatar.image("#{playlist_title}")
  desc = Faker::Hipster.paragraph(3, false, 3)

  #user
  user_name = Faker::StarWars.character

  #tags
  3.times do
    create(:tag, Faker::Hipster.word)
  end

  create(:user, username: username)
  create(:playlist, title: playlist_title, description: desc, picture_url: img, user_id: n, username: user_name)

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

Playlist.create({
  title: "Untitled Playlist",
  description: "",
  picture_url: "http://res.cloudinary.com/loren-losch/video/upload/v1478376153/ctxdvbf1wzvbnhuojnr1.mp3",
  user_id: 2,
  username: ""
  })

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
