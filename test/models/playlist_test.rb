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

require 'test_helper'

class PlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
