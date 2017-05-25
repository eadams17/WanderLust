@tags.each do |tag|
  json.set! tag.id do
    json.id tag.id
    json.photo_id tag.photo_id
    json.tag_name tag.tag_name
  end
end
