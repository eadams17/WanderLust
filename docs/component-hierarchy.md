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

##Routes

Path | Component
---- | ---------
"/register" | "AuthFormContainer"
"/sign-in" | "AuthFormContainer"
"/home" | "HomeContainer"
"/photos" | "PhotosContainer"
"/photos/:photoId" | "PhotoContainer"
"/albums" | "AlbumsContainer"
"/albums/:albumId/photos" | "AlbumContainer"
"/search-results" | "PhotosContainer"
