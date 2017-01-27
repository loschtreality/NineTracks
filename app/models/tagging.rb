# == Schema Information
#
# Table name: taggings
#
#  id          :integer          not null, primary key
#  playlist_id :integer
#  tag_id      :integer
#

class Tagging < ApplicationRecord
  validates :playlist, :tag, presence: true

  belongs_to :playlist
  belongs_to :tag
end
