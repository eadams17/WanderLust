export const fetchTags = data => (
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    data
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
