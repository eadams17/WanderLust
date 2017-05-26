export const selectPhoto = (photos, id) => {
   const photo = photos[id] || {tags: []};
   return photo;
};

export const selectAlbum = (albums, id) => {
   const album = albums[id] || {};
   return album;
};

export const toArray = (object) => (
  Object.keys(object).map(key => object[key])
);
