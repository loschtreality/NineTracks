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


  music_words = [
    "Rock",
    "Electronic",
    "Dance",
    "Metal",
    "Gospel",
    "Folk",
    "Ambient",
    "Chillwave",
    "Dance",
    "Deep House",
    "Drumb & Bass",
    "House",
    "Dubstep",
    "Indie",
    "Pop",
    "Psychedelic",
    "Thrash",
    "New Wave",
    "Pop Punk",
    "Emo",
    "Bluegrass",
    "Opara",
    "Ballet",
    "Alternative",
    "Country",
    "Hip hop",
    "Rap",
    "Reggaeton",
    "Trap",
    "Avant-Garde",
    "Nu Metal",
    "Suldge Metal",
    "Noise Rock",
    "Stadium Rock",
    "Post-Punk",
    "Shoegaze",
    "Dream Pop",
    "European Pop",
    "K-Pop",
    "Synth Pop",
    "Humanitarian",
    "Funk",
    "Alternative Opera",
    "Thrash Funk Rap",
    "Nu House",
    "Electronic Rock",
    "Reggaeton Shoegaze",
    "Advante-Garde Metal",
    "Emo Wave",
    "Psychedelic Gospel",
    "Indie K-Pop"
  ]


(1..50).each do |n|
  # Playlist
  playlist_title = Faker::Book.title
  img = Faker::Avatar.image("#{playlist_title}")
  desc = Faker::Hipster.paragraph(3, false, 3)

  #user
  user_name = "#{Faker::StarWars.character} #{Faker::Name.last_name}"


  FactoryGirl.create(:tag, title: "#{music_words[n]} #{Faker::Music.instrument}")
  FactoryGirl.create(:tag, title: "#{Faker::Hipster.word} #{music_words[n]}")
  FactoryGirl.create(:tag, title: "#{music_words[n]} #{Faker::Space.constellation}")

  FactoryGirl.create(:user, username: user_name)

  FactoryGirl.create(:playlist, title: playlist_title, description: desc, picture_url: img, user_id: n, username: user_name)

  FactoryGirl.create(:playlist, title: "#{music_words[n]} #{Faker::Space.nebula}", description: Faker::Hipster.paragraph(3, false, 3), picture_url: Faker::Avatar.image("#{Faker::StarWars.character}"), user_id: n, username: user_name)


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

Song.create({
  title: "fake you out",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478747325/fake_you_out_-_twenty_one_pilots_mu5lmh.mp3",
  user_id: 2
  })

Song.create({
  title: "doubt",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478747327/DoubtTwenty_One_Pilots_Lyrics_apqedy.mp3",
  user_id: 2
  })


Song.create({
  title: "ode to sleep",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478747061/Ode_To_Sleep_By-_Twenty_One_Pilots_esovcg.mp3",
  user_id: 2
  })

Song.create({
  title: "the judge",
  artist: "twenty one pilots",
  url: "https://cloudinary.com/console/media_library#/dialog/video/upload/the_judge_twenty_one_pilots_smkbu5",
  user_id: 2
  })

Song.create({
  title: "lane boy",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478747023/Lane_Boy_-_Twenty_One_Pilots_jgthtu.mp3",
  user_id: 2
  })

Song.create({
  title: "stressed out",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478746965/stressed-out_twentyone-pilots_maxs2c.mp3",
  user_id: 2
  })

Song.create({
  title: "house of gold",
  artist: "twenty one pilots",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478746915/house_of_gold_twenty_one_pilots_vkkzxv.mp3",
  user_id: 2
  })

Song.create({
  title: "working for it",
  artist: "zhu skrillex they",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752961/ZHU_x_Skrillex_x_THEY._-_Working_For_It_Audio_zl1bgj.mp3",
  user_id: 2
  })


Song.create({
  title: "numb",
  artist: "zhu",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752960/ZHU_-_Numb_Audio_rwcdex.mp3",
  user_id: 2
  })

Song.create({
  title: "money",
  artist: "zhu",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752959/ZHU_-_Money_Audio_m2ltvm.mp3",
  user_id: 2
  })

Song.create({
  title: "cocain model",
  artist: "zhu",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752968/ZHU_-_Cocaine_Model_fvgqzb.mp3",
  user_id: 2
  })

Song.create({
  title: "generation why",
  artist: "zhu",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752959/ZHU_-_Generationwhy_Audio_pqgwgy.mp3",
  user_id: 2
  })

Song.create({
  title: "cold blooded",
  artist: "zhu",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478752961/ZHU_-_Cold_Blooded_Audio_zzbzvl.mp3",
  user_id: 2
  })

Song.create({
  title: "when we were young",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753727/When_We_Were_Young_-_Adele_hz10pd.mp3",
  user_id: 2
  })

Song.create({
  title: "someone like you",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753719/Adele_-_Someone_Like_You_Audio_ghqxuq.mp3",
  user_id: 2
  })

Song.create({
  title: "set fire to the rain",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753728/Adele_-_Set_Fire_To_The_Rain_Audio_uilreq.mp3",
  user_id: 2
  })

Song.create({
  title: "send my love to (your new lover)",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753719/Adele_-_Send_My_Love_To_your_New_Lover_Lyrics_HD_nequd8.mp3",
  user_id: 2
  })

Song.create({
  title: "rolling in the deep",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753724/Adele_-_Rolling_in_the_Deep_Audio_oqcnbv.mp3",
  user_id: 2
  })

Song.create({
  title: "love in the dark",
  artist: "adele",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478753724/Adele_-_Love_In_The_Dark_Audio_Official_uf0hmx.mp3",
  user_id: 2
  })

Song.create({
  title: "you aint alone",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754308/You_ain_t_alone_-_Alabama_Shakes_Lyric_gtylnh.mp3",
  user_id: 2
  })

Song.create({
  title: "future people",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754305/Future_People_-_Alabama_Shakes_lyrics_u3vuou.mp3",
  user_id: 2
  })

Song.create({
  title: "sound and color",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754304/Alabama_Shakes_-_Sound_and_Color_LYRICS_HD_awmssl.mp3",
  user_id: 2
  })

Song.create({
  title: "shoegaze",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754304/Alabama_Shakes_-_Shoegaze_LYRICS_pzxnnk.mp3",
  user_id: 2
  })

Song.create({
  title: "hold on",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754304/Alabama_Shakes_-_Hold_On_with_lyrics_usloj5.mp3",
  user_id: 2
  })

Song.create({
  title: "dunes",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754305/Alabama_Shakes_-_Dunes_lyrics_video_bm5w5b.mp3",
  user_id: 2
  })

Song.create({
  title: "dont wanna fight",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754304/Alabama_Shakes_-_Don_t_Wanna_Fight_lyrics_pp95jb.mp3",
  user_id: 2
  })

Song.create({
  title: "be mine",
  artist: "alabama shakes",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754303/Alabama_Shakes_-_Be_Mine_lyrics_md1fgf.mp3",
  user_id: 2
  })


Song.create({
  title: "wake up alone",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754902/Amy_Winehouse-_Wake_up_alone_lyrics_sqin82.mp3",
  user_id: 2
  })

Song.create({
  title: "valerie",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754902/Amy_Winehouse-_Valerie_Lyrics_iztgbg.mp3",
  user_id: 2
  })

Song.create({
  title: "me and mr.jones",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754899/Amy_Winehouse-_Me_and_Mr._Jones_and_lyrics_vs3lue.mp3",
  user_id: 2
  })

Song.create({
  title: "you know im no good",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754906/Amy_Winehouse_You_No_I_m_No_Good_w_Lyrics_giqpee.mp3",
  user_id: 2
  })

Song.create({
  title: "will you still love me tomorrow",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754900/Amy_Winehouse_-_Will_you_still_love_me_tomorrow_with_lyrics_ik1hvs.mp3",
  user_id: 2
  })

Song.create({
  title: "tears dry on their own",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754899/Amy_Winehouse_-_Tears_Dry_On_Their_Own_Lyric_Video_gr4xl4.mp3",
  user_id: 2
  })

Song.create({
  title: "back to black",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754904/Amy_Winehouse_-_Back_to_Black_ossbmx.mp3",
  user_id: 2
  })

Song.create({
  title: "rehab",
  artist: "amy winehouse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478754899/Amy_Winehouse_-_Rehab_LYRICS_ON_SCREEN_qqtyie.mp3",
  user_id: 2
  })


Song.create({
  title: "buried myself alive",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755977/The_Used_-_Buried_Myself_Alive_Lyrics_s7ncbv.mp3",
  user_id: 2
  })


Song.create({
  title: "noise and kisses",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755958/The_Used-_Noise_and_Kisses_tgh1k1.mp3",
  user_id: 2
  })


Song.create({
  title: "all that ive got",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755879/All_That_I_ve_Got_-_The_Used_Lyrics_HD_rf24f9.mp3",
  user_id: 2
  })


Song.create({
  title: "paralyzed",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755935/The_Used_-_Paralyzed_Lyrics_waierw.mp3",
  user_id: 2
  })


Song.create({
  title: "the taste of ink",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755885/The_Taste_of_Ink_Lyrics_by_The_Used_yfvlr3.mp3",
  user_id: 2
  })


Song.create({
  title: "the bird and the worm",
  artist: "the used",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755886/The_Bird_and_the_Worm-_The_Used_Lyrics_dy8il6.mp3",
  user_id: 2
  })


Song.create({
  title: "uprising",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755886/muse-Uprising_lyrics_w2ftru.mp3",
  user_id: 2
  })


Song.create({
  title: "supermassive black hole",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755886/Muse-Supermassive_Black_Hole_lyrics_rsnnqq.mp3",
  user_id: 2
  })


Song.create({
  title: "resistance",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755887/Muse_Resistance_Lyrics_fytjht.mp3",
  user_id: 2
  })

Song.create({
  title: "undisclosed desires",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755880/Muse_-_Undisclosed_Desires_Lyrics_d9nxj5.mp3",
  user_id: 2
  })

Song.create({
  title: "time is running out",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755879/Muse_-_Time_Is_Running_out_-_lyrics_ahtwkf.mp3",
  user_id: 2
  })

Song.create({
  title: "madness",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755879/Muse_-_Madness_-_Lyrics_c0yrxa.mp3",
  user_id: 2
  })

Song.create({
  title: "hysteria",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755880/Muse_-_Hysteria_Lyrics_d4bwtt.mp3",
  user_id: 2
  })

Song.create({
  title: "knights of cydonia",
  artist: "muse",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478755878/Knights_of_Cydonia_lyrics_-Muse_rms3kp.mp3",
  user_id: 2
  })

Song.create({
  title: "welcome to the black parade",
  artist: "my chemical romance",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478756836/Welcome_To_The_Black_Parade_-_My_Chemical_Romance_Lyrics_jkskyk.mp3",
  user_id: 2
  })

Song.create({
  title: "thank you for the venom",
  artist: "my chemical romance",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478756837/Thank_You_For_The_Venom_-_My_Chemical_Romance_-_Lyrics_xbr98j.mp3",
  user_id: 2
  })

Song.create({
  title: "helena",
  artist: "my chemical romance",
  url: "http://res.cloudinary.com/loren-losch/video/upload/v1478756836/Helena_-_My_Chemical_RomanceLyrics_ba29rc.mp3",
  user_id: 2
  })





# Connect playlists with tags and songs
Playlist.all.each do |pl|
  (rand(2) + 2).times { Tagging.create(playlist_id: pl.id, tag_id: Tag.find_by_id(rand(149) + 1).id)}
  (9).times { Mix.create(playlist_id: pl.id, song_id: Song.find_by_id(rand(56) + 1).id)}
end
