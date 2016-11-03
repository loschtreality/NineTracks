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

require 'test_helper'

class MixTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
