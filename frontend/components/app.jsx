import React from 'react';
import { HashRoute, Route, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photos/photo_index_container';
import ProfileContainer from './profile/profile_container';
import PhotoStreamContainer from './photos/photo_stream_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotoShowContainer from './photos/photo_show_container';
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
import AlbumGalleryContainer from './albums/album_gallery_container';
import AlbumFormContainer from './albums/album_form_container';

const App = () => (
  <div className="app">
    <NavbarContainer/>
    <Switch>
      <ProtectedRoute path={`/profile/:username/albums/:id/photos`} component={ AlbumGalleryContainer }/>
      <ProtectedRoute path={`/profile/:username/albums/:id`} component={ AlbumShowContainer }/>
      <ProtectedRoute path={`/profile/:username/albums`} component={ AlbumIndexContainer }/>
      <ProtectedRoute path={`/profile/:username/photos`} component={ PhotoStreamContainer }/>
      <ProtectedRoute path={`/profile/:username/newalbum`} component={ AlbumFormContainer }/>
      <ProtectedRoute path={`/profile/:username/upload`} component={ PhotoUploadContainer }/>
      <ProtectedRoute path={`/profile/:username`} component={ ProfileContainer }/>
      <ProtectedRoute path="/photos/:id" component={ PhotoShowContainer }/>
      <ProtectedRoute path="/photos" component={ PhotoIndexContainer }/>
      <AuthRoute path="/login" component={ SessionFormContainer }/>
      <AuthRoute path="/register" component={ SessionFormContainer }/>
      <Route path="/" component={ SplashContainer }/>
    </Switch>
  </div>
);

export default App;
