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

ActiveRecord::Schema.define(version: 20170525170823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.string   "description"
    t.string   "thumbnail_url", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_albums_on_user_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "photo_id",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photo_id"], name: "index_comments_on_photo_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "photo_tags", id: false, force: :cascade do |t|
    t.integer "photo_id"
    t.integer "tag_id"
    t.index ["photo_id"], name: "index_photo_tags_on_photo_id", using: :btree
    t.index ["tag_id"], name: "index_photo_tags_on_tag_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "caption"
    t.string   "img_url",    null: false
    t.integer  "user_id",    null: false
    t.integer  "album_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["img_url"], name: "index_photos_on_img_url", using: :btree
    t.index ["user_id"], name: "index_photos_on_user_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "tag_name",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_name"], name: "index_tags_on_tag_name", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "firstname",       null: false
    t.string   "lastname",        null: false
    t.string   "username",        null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
