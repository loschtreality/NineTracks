# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  has_many :taggings, inverse_of: :tag

  has_many(
  :playlists,
  primary_key: :id,
  through: :taggings,
  source: :playlist
  )
end
