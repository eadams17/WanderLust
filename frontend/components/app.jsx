import React from 'react';
import { HashRoute, Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photos/photo_index_container';
import ProfileContainer from './profile/profile_container';
import PhotoStreamContainer from './photos/photo_stream_container';

const App = () => (
  <div className="app">
    <NavbarContainer/>
    <Route exact path="/" component={ SplashContainer }/>
    <ProtectedRoute path="/profile/:username" component={ ProfileContainer }/>
    <ProtectedRoute path="/profile/:username/photos" component={ PhotoStreamContainer }/>
    <ProtectedRoute path="/photos" component={ PhotoIndexContainer }/>
    <AuthRoute path="/login" component={ SessionFormContainer }/>
    <AuthRoute path="/register" component={ SessionFormContainer }/>
  </div>
);

export default App;
