export const fetchPhotos = data => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    data
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: {photo}
  })
);

export const destroyPhoto = (id) => (
  $.ajaz({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
