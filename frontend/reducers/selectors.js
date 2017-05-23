export const selectPhoto = (photos, id) => {
   const photo = photos[id] || {};
   return photo;
};

export const selectAlbum = (albums, id) => {
   const album = albums[id] || {};
   return album;
};
