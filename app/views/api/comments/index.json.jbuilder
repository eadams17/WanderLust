@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.photo_id comment.photo_id
    json.username comment.user.username
  end
end
