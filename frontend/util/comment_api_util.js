export const fetchComments = data => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data
  })
);

export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`,
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  })
);

export const destroyComment = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
