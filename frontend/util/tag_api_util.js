export const fetchTags = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tags',
  })
);

export const fetchTag = id => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${id}`,
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: {tag}
  })
);


export const createPhotoTag = photoTag => (
  $.ajax({
    method: 'POST',
    url: 'api/photo_tags',
    data: {photoTag}
  })
);
