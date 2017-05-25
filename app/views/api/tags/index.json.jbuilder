@tags.each do |tag|
  json.set! tag.id do
    json.id tag.id
    json.tag_name tag.tag_name
  end
end
