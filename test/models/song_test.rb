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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
