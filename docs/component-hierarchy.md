#Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* HomeNavBar

**PhotosContainer**
* PhotosIndex

**PhotoContainer**
* Photo Display
* Comments
* Add Comment Form

**AlbumsContainer**
* AlbumHeader
* AlbumsIndex

**AlbumContainer**
* PhotoIndex

**SearchResultsContainer**
* PhotoIndex

##Routes

Path | Component
---- | ---------
"/register" | "AuthFormContainer"
"/sign-in" | "AuthFormContainer"
"/home" | "HomeContainer"
"/home/photos" | "PhotosContainer"
"/home/photos/:photoId" | "PhotoContainer"
"/home/albums" | "AlbumsContainer"
"/home/albums/:albumId/photos" | "AlbumContainer"
"/home/search-results" | "SearchResultsContainer"
