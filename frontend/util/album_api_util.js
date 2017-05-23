export const fetchAlbums = data => (
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: {album}
  })
);

export const destroyAlbum = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);
