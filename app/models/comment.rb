# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  user_name   :string           not null
#  user_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ApplicationRecord

  belongs_to :user
  belongs_to :playlist
end
