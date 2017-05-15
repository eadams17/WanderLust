{
  currentUser: {
    id: 1,
    username: "ericadams"
  },
  formErrors: {
    signUp: [],
    logIn: [],
    createAlbum: ["title can't be blank"],
    addComment: ["body can't be blank"],
    uploadPhoto: ["title can't be blank"]
  },
  photos: {
    1: {
      img_url: "http://www.sample.com",
    }
  },
  photoDetail: {
    1: {
      title: "Railay Beach",
      caption: "The most beautiful beach in the world!"
      img_url: "http://www.sample.com",
      author_id: 1,
      album_id: 1,
      tags: {
        1: {    
          id: 1,
          name: "Thailand"
        }
        2: {
          id: 2,
          name: "beach"
        }
      }
      comments: {
        1: {
          id: 1,
          body: "Great photo!"
        }
        2: {
          id: 2,
          body: "Beautiful shot!"
        }
      }
    }
  },
  albums: {
    1: {
      title: "Thailand Vacation",
      author_id: 1,
      description: "beautiful"
      thumbnail_url: "http://www.sample.com"
    }
  }
  tagFilters: [1, 2] // Used to track selected Tags for filtering of photos
}
