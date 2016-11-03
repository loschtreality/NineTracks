# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161103185911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",        null: false
    t.string   "user_name",   null: false
    t.integer  "user_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_comments_on_playlist_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "mixes", force: :cascade do |t|
    t.integer  "playlist_id"
    t.integer  "song_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_mixes_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_mixes_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.string   "picture_url"
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_playlists_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",       default: "Anonymous"
    t.string   "artist",      default: "Anonymous"
    t.string   "url",                               null: false
    t.string   "picture_url"
    t.integer  "user_id",                           null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.index ["user_id"], name: "index_songs_on_user_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "playlist_id"
    t.integer "tag_id"
    t.index ["playlist_id", "tag_id"], name: "index_taggings_on_playlist_id_and_tag_id", using: :btree
    t.index ["playlist_id"], name: "index_taggings_on_playlist_id", using: :btree
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_tags_on_title", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "picture_url"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
