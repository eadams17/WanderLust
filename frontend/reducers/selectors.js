export const selectPhoto = (photos, id) => {
   const photo = photos[id] || {};
   return photo;
};
