# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  picture_url :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, length: {minimum: 1}

  belongs_to :user
  has_many :comments
  has_many :taggings, inverse_of: :playlist

  has_many(
  :mixes,
  primary_key: :id,
  foreign_key: :playlist_id,
  class_name: "Mix"
  )

  has_many(
  :songs,
  primary_key: :id,
  through: :mixes,
  source: :song
  )

  has_many(
  :tags,
  primary_key: :id,
  through: :taggings,
  source: :tag
  )

end
