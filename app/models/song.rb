# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  title       :string           default("Anonymous")
#  artist      :string           default("Anonymous")
#  url         :string           not null
#  picture_url :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :artist, :url, :user_id, presence: true
  validates :title, length: {minimum: 1}
  belongs_to :user

  has_many(
  :mixes,
  primary_key: :id,
  foreign_key: :song_id,
  class_name: "Mix"
  )

  has_many(
  :playlists,
  through: :mixes,
  source: :playlist
  )
end
