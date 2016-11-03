# == Schema Information
#
# Table name: mixes
#
#  id          :integer          not null, primary key
#  playlist_id :integer
#  song_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Mix < ApplicationRecord
  validates :playlist, :song, presence: true


  belongs_to :playlist
  belongs_to :song
end
