json.extract! photo, :id, :caption, :img_url, :user_id, :album_id
json.user photo.user
json.comments photo.comments
json.album photo.album
json.tags photo.tags
