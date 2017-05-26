# WanderLust

[WanderLust](https://explorewanderlust.herokuapp.com/#/) is a travel-themed photo-sharing web application inspired by Flickr built over the course of two weeks. Users can create albums and upload photos to curate galleries of their travel adventures. Users can also search and explore other user photos hosted on the application via photo tags.

[Welcome Page]: https://github.com/eadams17/WanderLust/blob/master/docs/screenshots/profile_page.png

# Technology

This application uses Rails, a back-end model-view-controller web framework, for storing and fetching data with a connection to a PostGreSQL database. The front-end was built using javascript's React library which enables the application to be fast, simple and scalable. This was used in combination with Redux in order to ensure a unidirectional dataflow, allowing for easier debugging scenarios.

# Features

* User accounts with secure encrypted authentication
* Custom album creation
* Photo uploads
* User comments
* Searchable photo tags

#Implementation

## Photos, Albums and Comments

Photos are uploaded by users and organized into custom-created albums. Photos can be uploaded with captions and can be assigned various searchable photo tags. Each photo belongs to an album which has a title, description, and gallery view of said photos. Each photo can be viewed along with its caption, tags and associated comments.

The application makes use of the cloud-based image host Cloudinary for storing and uploading user photos. Users' photos live in the cloud while the url link and other associated information is stored and fetched via the Rails database.

Each photo can be viewed with a display of itself and its associated tags and comments. Comments are listed alongside the photo display with a comment form underneath. Users can add and delete photo comments, and users can delete any comments made on their photos. Comments are fetched from the back-end based on the comment-photo rails association.

[photo view display]: https://github.com/eadams17/WanderLust/blob/master/docs/screenshots/photo_view.png


## Tags and Search

When a user uploads a photo, they can select from a similar auto-complete drop down form of preset tags and choose tags that can be associated with their photo. Upon submit, this information is sent to the back-end photos controller where an entry is created in the photo tags join table which builds associations between the photo and the tag.

A user can also browse other users' photos by searching for various tags (ie. 'beach'). Search terms are entered into a auto-complete enabled search bar located in the navigation bar. This auto-complete, drop-down search bar functionality was implemented via React's autocomplete NPM package. The search bar, shown below, has drop-down functionality to populate results based on character input from the user.

//drop-down photo goes here//

The search bar component takes this particular search-term slice of state and passes it to the photos controller as a search query param. It hits the same photo index API endpoint, but only returns photos matched to that search term's tag ID. The display below the navigation bar is then re-rendered with a display of all of the photos tagged by that particular tag.

```javascript

//Search Bar Component//

const searchBar = (fetchTags, tags, update, search_term, handleTagId) => (
  <div className="nav-middle">
    <i className="fa fa-search"></i>
    <Autocomplete
      value={search_term}
      items={tags}
      inputProps={{ placeholder: 'search for photos by tags (i.e. "beach")', className: "search-input"}}
      getItemValue={(tag) => tag.tag_name}
      onChange={(e) => update(e)}
      onSelect={ value => {
        const returnTagId = tags.filter(tag => tag.tag_name === value)[0].id;
        handleTagId(returnTagId);
      }}
      shouldItemRender={matchStateToTerm}
      sortItems={sortStates}
      renderItem={(tag, isHighlighted) => (
        <div
          className={isHighlighted ? 'highlighted-term' : 'list-term'}
          key={tag.id}
          >{tag.tag_name}</div>
      )}
      />
  </div>
);

//Photo Index Component

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.location.search) {
      this.props.fetchPhotos();
    }
  }
}

```

## Additional Features

Some features which are planned to be implemented in the future include: infinite-scroll for search results, and an interactive geolocation map to replace the splash page which will deliver a feed of photos tagged to those coordinates.
