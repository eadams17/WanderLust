{
  currentUser: {
    id: 1,
    username: "ericadams"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createAlbum: {errors: ["title can't be blank"]}
    addComment: {errors: ["body can't be blank"]}
  },
  photos: {
    1: {
      title: "Railay Beach",
      img_url: "http://www.sample.com",
      author_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "Thailand"
        }
        2: {
          id: 2
          name: "Beach"
        }
      }
    }
  },
  albums: {
    1: {
      title: "Thailand Vacation",
      author_id: 1,
      description: "beautiful"
    }
  }
  tagFilters: [1, 2] // Used to track selected Tags for filtering of photos
}
