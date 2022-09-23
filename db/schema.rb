# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_23_163010) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "choices", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.string "content"
    t.string "image_url"
    t.integer "item_needed"
    t.integer "next_event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_choices_on_event_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "story_id", null: false
    t.string "name"
    t.text "short_description"
    t.text "long_description"
    t.string "image_url"
    t.string "sound_effect"
    t.integer "delay"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id"], name: "index_events_on_story_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.bigint "userstory_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_inventories_on_item_id"
    t.index ["userstory_id"], name: "index_inventories_on_userstory_id"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_items_on_event_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_url"
    t.string "trigger_warnings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userchoices", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.bigint "choice_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["choice_id"], name: "index_userchoices_on_choice_id"
    t.index ["event_id"], name: "index_userchoices_on_event_id"
    t.index ["user_id"], name: "index_userchoices_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "image_url"
    t.integer "left_off"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userstories", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "story_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id"], name: "index_userstories_on_story_id"
    t.index ["user_id"], name: "index_userstories_on_user_id"
  end

  add_foreign_key "choices", "events"
  add_foreign_key "events", "stories"
  add_foreign_key "inventories", "items"
  add_foreign_key "inventories", "userstories"
  add_foreign_key "items", "events"
  add_foreign_key "userchoices", "choices"
  add_foreign_key "userchoices", "events"
  add_foreign_key "userchoices", "users"
  add_foreign_key "userstories", "stories"
  add_foreign_key "userstories", "users"
end
