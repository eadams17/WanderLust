# API Endpoints

## HTML API

### Root

* GET / - loads React web app

## JSON API

### Users

* POST /api/users
* PATCH /api/users

### Session

* POST /api/session
* DELETE /api/session

### Photos

* GET /api/photos
  * Photos index/search
  * accepts tag_name query param to list photos by tag
* POST /api/photos
* GET /api/photos/:id
* DELETE /api/notes/:id

### Albums

* GET /api/albums
* POST /api/albums
* GET /api/albums/:id
* DELETE /api/albums/:id
* GET /api/albums/:id/photos
  * index of all photos for a album

### Comments

* GET /api/photos/:id
* POST /api/photos/:id
* DELETE /api/photos/:id

### Tags

* GET /api/tags
  * includes query param for typeahead suggestions
